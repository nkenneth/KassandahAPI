const SYSTEM_FAILURE = "Internal server error!!!";

// middleware auth
const MIDDLEWARE_AUTH_CONSTANTS = {
  ACCESS_DENIED: "Access denied. No authorization token provided",
  RESOURCE_FORBIDDEN: "You don't have access to the request resource.",
  INVALID_AUTH_TOKEN: "Invalid token",
};

const AUTH_CONSTANTS = {
  INVALID_OPERATOR: "Invalid Operator Id",
  INVALID_CREDENTIALS: "Invalid email or password",
  INVALID_PASSWORD: "You have entered incorrect old password. Please try again with valid password.",
  INACTIVE_ACCOUNT: "Account is not active. please contact admin",
  INVALID_EMAIL: "The email provided is not registered. Please sign up to continue.",
  PASSWORD_CHANGE_SUCCESS: "Password changed succesfully",
  MOBILE_REQUIRED: '"mobile" is required',
};

const VERSION_CONSTANT = {
  SUBMIT_SUCCESS: "Version details added successfully",
  NO_UPDATE: "You are on latest version",
  VERSION_MANDATORY: "Query parameter v is mandatory",
  APPTYPE_MANDATORY: "Query parameter appType is mandatory",
};

// admins.js
const ADMIN_CONSTANTS = {
  INVALID_EMAIL: "Invalid username/password.",
  BLOCKED_ACCOUNT: "Your account is blocked. Please contact admin.",
  NOTIFICATION_SUCCESS: "Notificaiton submitted successfully",
  DUPLICATE_MANAGER: "Manager with given email already exists.",
  MANAGER_SUBMIT_SUCCESS: "Manager added successfully",
  MANAGER_DELETE_SUCCESS: "Manager updated successfully",
  MANAGER_UPDATE_SUCCESS: "Manager deleted successfully",
  INVALID_MANAGER: "No manager with given Id found.",
};

const ROLE_CONSTANTS = {
  SUBMIT_SUCCESS: "Role added successfully",
  UPDATE_SUCCESS: "Role updated successfully",
  DELETE_SUCCESS: "Role deleted successfully",
};

const USER_CONSTANTS = {
  INVALID_USER: "User with given id not found",
  UPDATE_SUCCESS: "User updated successfully",
  SUBMIT_SUCCESS: "User added successfully",
  EMAIL_ALREADY_EXISTS: "Email already registered",
  MOBILE_ALREADY_EXISTS: "Mobile number already registered",
  MOBILE_EMAIL_ALREADY_EXISTS: "Mobile and Email both already registered",
  ALL_CHECKS_VALID: "All check are valid",
  VERIFICATION_SUCCESS: "Verification success",
};



module.exports.SYSTEM_FAILURE = SYSTEM_FAILURE;
module.exports.AUTH_CONSTANTS = AUTH_CONSTANTS;
module.exports.MIDDLEWARE_AUTH_CONSTANTS = MIDDLEWARE_AUTH_CONSTANTS;
module.exports.ADMIN_CONSTANTS = ADMIN_CONSTANTS;
module.exports.VERSION_CONSTANT = VERSION_CONSTANT;
module.exports.ROLE_CONSTANTS = ROLE_CONSTANTS;
module.exports.USER_CONSTANTS = USER_CONSTANTS;
