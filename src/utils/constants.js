const constants = {
  BASE_API_URL: "http://212.1.214.4:8080/api/v1/",
  API_ENDPOINTS: {
    LOGIN: "login",
    REGISTER: "register",
    GET_USER: "getUser",
  },
  ERROR_MESSAGES: {
    REQUIRED_FIELD: "This is a required field.",
    INVALID_EMAIL: "Please provide a valid email.",
    INVALID_PASSWORD:
      "Password should be minimum 8 characters long with atleast one uppercase ,one lowercase, one number and one special character.",
    INVALID_MOBILE: "Please provide a valid mobile number.",
    PASSWORD_NOT_EQUAL: "Password and Confirm Password fields should match.",
  },
  API_ERROR_MESSAGES: {
    GENERAL_ERROR: "Some error occured. Please try again!",
    USER_ALREADY_EXISTS: "User with this email already exists. Please try again with other email.",
    INVALID_CREDENTIALS: "Incorrect Email or Password. Please try again!",
  },
  REGEX: {
    EMAIL:
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
    PASSWORD:
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
    MOBILE: "",
  },
};

export default constants;
