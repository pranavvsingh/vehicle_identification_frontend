import constants from "./constants";

export class Validation {
  constructor(data) {
    this.data = data;
    this.hasErrors = false;
    this.errors = {};
  }

  startValidation() {
    return this;
  }

  validateEmptyFields() {
    Object.keys(this.data).forEach((field) => {
      if (!this.data[field].trim()) {
        this._setError(field, constants.ERROR_MESSAGES.REQUIRED_FIELD);
      }
    });
    return this;
  }

  validateEmail() {
    if (this.data.email && !this.data.email.match(constants.REGEX.EMAIL))
      this._setError("email", constants.ERROR_MESSAGES.INVALID_EMAIL);
    return this;
  }

  validatePassword() {
    if (
      this.data.password &&
      !this.data.password.match(constants.REGEX.PASSWORD)
    )
      this._setError("password", constants.ERROR_MESSAGES.INVALID_PASSWORD);
    return this;
  }

  validatePasswordMatch() {
    if (this.data.password && this.data.confirmPassword) {
      if (this.data.password !== this.data.confirmPassword) {
        this._setError(
          "confirmPassword",
          constants.ERROR_MESSAGES.PASSWORD_NOT_EQUAL
        );
      }
    }
    return this;
  }

  validateMobileNumber() {
    if (this.data.mobile && !this.data.mobile.match(constants.REGEX.MOBILE))
      this._setError("mobile", constants.ERROR_MESSAGES.INVALID_MOBILE);
    return this;
  }

  complete() {
    return {
      errors: this.errors,
      hasErrors: !!Object.keys(this.errors).length,
    };
  }

  _setError(field, message) {
    this.errors = {
      ...this.errors,
      [field]: {
        message,
      },
    };
  }
}
