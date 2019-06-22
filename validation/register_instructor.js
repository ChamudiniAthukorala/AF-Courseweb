const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInputInstructor(data) {
  let errors = {};

  data.fname = !isEmpty(data.fname) ? data.fname : "";
  data.lname = !isEmpty(data.lname) ? data.lname : "";
  data.dob = !isEmpty(data.dob) ? data.dob : "";
  data.uid = !isEmpty(data.uid) ? data.uid : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.confirmPassword = !isEmpty(data.confirmPassword)
    ? data.confirmPassword
    : "";

  if (!Validator.isLength(data.password, { min: 8 })) {
    errors.password = "Password must be more than 8 characters";
  }

  if (Validator.isEmpty(data.fname)) {
    errors.fname = "First name field is required";
  }
  if (Validator.isEmpty(data.lname)) {
    errors.lname = "Last name field is required";
  }
  if (Validator.isEmpty(data.dob)) {
    errors.dob = "Date of birth field is required";
  }
  if (Validator.isEmpty(data.uid)) {
    errors.uid = "User ID field is required";
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
