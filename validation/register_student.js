const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInputStudent(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : "";

  if (!Validator.isLength(data.name, { min: 8 })) {
    errors.name = "Name must be more than 8 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }
  //email validation
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (Validator.isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Password confirmation field is required";
  }

  //password match
  if (!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Password must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
