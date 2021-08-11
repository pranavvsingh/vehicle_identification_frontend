import { CCol, CCard } from "@coreui/react";
import { Form, Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import { Validation } from "src/utils/Validation";
import { apiDataPost } from "src/Api/Api";
import { Alert } from "react-bootstrap";
import constants from "src/utils/constants";
import { toast } from "react-toastify";

const Signup = () => {
  const intialData = {
    email: "",
    country: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  };
  const [data, setData] = useState(intialData);
  const [errors, setErrors] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [isRegistered, setRegistered] = useState(false);
  const [isPasswordVisible, setPasswordVisibility] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validateAndSubmit = (event) => {
    event.preventDefault();
    const validation = new Validation(data);
    const { hasErrors, errors } = validation
      .startValidation()
      .validateEmptyFields()
      .validateEmail()
      .validateMobileNumber()
      .validatePassword()
      .validatePasswordMatch()
      .complete();

    if (hasErrors) {
      console.log(errors);
      setErrors({ ...errors });
    } else {
      setErrors({});
      registerUser();
    }
  };

  const registerUser = async () => {
    setLoading(true);
    try {
      const user = {
        US_Email: data.email,
        US_Mobile: data.mobile,
        US_Psswd: data.password,
        US_Register_Status: 1,
        US_Country: data.country,
      };
      const response = await apiDataPost(
        constants.API_ENDPOINTS.REGISTER,
        user
      );
      setLoading(false);
      if (response instanceof Error) throw response;
      toast.success('Registered Successfully!')
      setRegistered(true);
      setData(intialData);
    } catch (err) {
      console.log("Sign up failed");
      const status = err.response?.status;
      if (status === 409) {
        setErrors({
          apiError: constants.API_ERROR_MESSAGES.USER_ALREADY_EXISTS,
        });
      } else {
        setErrors({
          apiError: constants.API_ERROR_MESSAGES.GENERAL_ERROR,
        });
      }
    }
  };

  return (
    <CCol md="12">
      <div className="d-flex justify-content-center">
        <CCol md="4">
          {errors && errors.apiError && (
            <Alert variant="danger">{errors.apiError}</Alert>
          )}
          {isRegistered && (
            <Alert variant="success">
              Registration Successful! You can login now.{" "}
            </Alert>
          )}
          <CCard
            style={{ padding: 20 }}
            className="black-gradient-background border-0"
          >
            <Form onSubmit={validateAndSubmit}>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
                {errors && errors.email && (
                  <Form.Text className="text-danger">
                    {errors.email.message}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  name="country"
                  value={data.country}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  <option value="India">India</option>
                  <option value="America">America</option>
                  <option value="Canada">Canada</option>
                </Form.Control>
                {errors && errors.country && (
                  <Form.Text className="text-danger">
                    {errors.country.message}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Mobile Number"
                  name="mobile"
                  value={data.mobile}
                  onChange={handleChange}
                />
                {errors && errors.mobile && (
                  <Form.Text className="text-danger">
                    {errors.mobile.message}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <InputGroup>
                  <Form.Control
                    type={isPasswordVisible? 'text': 'password'}
                    name="password"
                    placeholder="Password"
                    className="border-right-0 no-outline"
                    value={data.password}
                    onChange={handleChange}
                  />
                  <InputGroup.Text
                    className="text-primary bg-white border-left-0 rounded-0 rounded-right-border"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                      setPasswordVisibility(!isPasswordVisible);
                    }}
                  >
                    {isPasswordVisible ? "Hide" : "Show"}
                  </InputGroup.Text>
                </InputGroup>
                {errors && errors.password && (
                  <Form.Text className="text-danger">
                    {errors.password.message}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter password again"
                  name="confirmPassword"
                  value={data.confirmPassword}
                  onChange={handleChange}
                />
                {errors && errors.confirmPassword && (
                  <Form.Text className="text-danger">
                    {errors.confirmPassword.message}
                  </Form.Text>
                )}
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="btn-block"
                disabled={isLoading}
              >
                {isLoading ? "Signing up..." : "Sign up"}
              </Button>
            </Form>
          </CCard>
        </CCol>
      </div>
    </CCol>
  );
};

export default Signup;
