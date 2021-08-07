import { useState } from "react";
import { CCol, CCard } from "@coreui/react";
import { Form, Button, Alert } from "react-bootstrap";
import { Validation } from "../utils/Validation";
import { apiDataPost } from "src/Api/Api";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { setData as setItem } from "../utils/localStorageUtil";
import constants from "src/utils/constants";
import { toast } from "react-toastify";

const Login = () => {
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({ email: "", password: "" });
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const validateAndSubmit = (event) => {
    event.preventDefault();
    const validation = new Validation(data);
    const { hasErrors, errors } = validation
      .startValidation()
      .validateEmptyFields()
      .validateEmail()
      .validatePassword()
      .complete();
    if (hasErrors) {
      console.log(errors);
      setErrors({ ...errors });
    } else {
      setErrors({});
      loginUser();
    }
  };

  const loginUser = async () => {
    setLoading(true);
    try {
      const response = await apiDataPost(constants.API_ENDPOINTS.LOGIN, data);
      setLoading(false);
      if (response instanceof Error) throw response;
      const userData = response.data.data[0];

      setItem("token", userData["US_Token"]);
      dispatch({ type: "login", payload: { userData } });
      toast.success('Login successfull!');
      history.push("/dashboard");
    } catch (err) {
      console.log("Login failed");
      const { status } = err.response;
      if (status === 404 || status === 403 || status === 422) {
        setErrors({
          apiError: constants.API_ERROR_MESSAGES.INVALID_CREDENTIALS,
        });
      } else {
        setErrors({
          apiError: constants.API_ERROR_MESSAGES.GENERAL_ERROR,
        });
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <CCol md="12">
      <div className="d-flex justify-content-center">
        <CCol md="4">
          {errors && errors.apiError && (
            <Alert variant="danger">{errors.apiError}</Alert>
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
                  name="email"
                  placeholder="Enter email"
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
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={handleChange}
                />
                {errors && errors.password && (
                  <Form.Text className="text-danger">
                    {errors.password.message}
                  </Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Remember me" />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                className="btn-block"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Log in"}
              </Button>
            </Form>
          </CCard>
        </CCol>
      </div>
    </CCol>
  );
};

export default Login;
