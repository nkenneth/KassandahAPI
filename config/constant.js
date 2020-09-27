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
  PHONE_ALREADY_EXISTS: "Phone number already registered",
  MOBILE_EMAIL_ALREADY_EXISTS: "Mobile and Email both already registered",
  ALL_CHECKS_VALID: "All check are valid",
  VERIFICATION_SUCCESS: "Verification success. Please log in.",
  VERIFICATION_FAILURE: "We were unable to find a valid token. Your token may have expired.",
  USER_ALREADY_VERIFIED: "This user has already been verified.",
  VERIFICATION_EMAIL_SENT: "Please confirm yourself by clicking on verify user button sent to your email",
  RESET_PASSWORD_EMAIL_SENT: "A reset email has been sent to your email",
  PASSWORD_MISMATCH: "Passwords do not match",
  NOT_YET_VERIFIED: "Your account has not been verified.",
  PASSWORD_CHANGE_SUCCESS: "Password reset successfully!"
};

//Ticket.js
const TICKET_CONSTANTS = {
  INVALID_TICKET: "Invalid Ticket Id",
  DUPLICATE_TICKET: "Ticket already exist",
  POSSIBLE_DUPLICATE_TICKET: "Please double check this ticket may already exist",
  TICKET_CREATED: "Ticket created succesfully",
  TICKET_DELETED: "Ticket deleted successfully",
  TICKET_UPDATED: "Ticket updated successfully",
  TICKET_EXPIRED: "Ticket expired",
  TICKET_NOT_FOUND: "Ticket NOT found"
};

const CATEGORY_CONSTANTS = {
  CATEGORY_EXISTS: "Category exists",
  CATEGORY_CREATED: "Category created successfully",
  CATEGORY_UPDATED: "Category updated successfully",
  CATEGORY_DELETED: "Category deleted successfully",
  CATEGORY_NOT_FOUND: "Category NOT found"
};

const PHASE_CONSTANTS = {
  PHASE_EXISTS: "Phase exists",
  PHASE_CREATED: "Phase created successfully",
  PHASE_UPDATED: "Phase updated successfully",
  PHASE_DELETED: "Phase deleted successfully",
  PHASE_NOT_FOUND: "Phase NOT found"
};


const WORKFLOW_CONSTANTS = {
  WORKFLOW_EXISTS: "Workflow exists",
  WORKFLOW_CREATED: "Workflow created successfully",
  WORKFLOW_UPDATED: "Workflow updated successfully",
  WORKFLOW_DELETED: "Workflow deleted successfully",
  WORKFLOW_NOT_FOUND: "Workflow NOT found"
};


const DEPARTMENT_CONSTANTS = {
  DEPARTMENT_EXISTS: "Department exists",
  DEPARTMENT_CREATED: "Department created successfully",
  DEPARTMENT_UPDATED: "Departmnt updated successfully",
  DEPARTMENT_DELETED: "Department deleted successfully",
  DEPARTMENT_NOT_FOUND: "Department NOT found"
};

const VENDOR_CONSTANTS = {
  VENDOR_EXISTS: "Vendor with same name, email or phone exists",
  VENDOR_CREATED: "Vendor created successfully",
  VENDOR_UPDATED: "Vendor updated successfully",
  VENDOR_DELETED: "Vendor deleted successfully",
  VENDOR_NOT_FOUND: "Vendor NOT found"
};


const UPLOAD_CONSTANTS = {
  VALIDATION_ERROR: "Only images, pdf and word documents are allowed!"
};


module.exports.SYSTEM_FAILURE = SYSTEM_FAILURE;
module.exports.AUTH_CONSTANTS = AUTH_CONSTANTS;
module.exports.MIDDLEWARE_AUTH_CONSTANTS = MIDDLEWARE_AUTH_CONSTANTS;
module.exports.ADMIN_CONSTANTS = ADMIN_CONSTANTS;
module.exports.VERSION_CONSTANT = VERSION_CONSTANT;
module.exports.ROLE_CONSTANTS = ROLE_CONSTANTS;
module.exports.USER_CONSTANTS = USER_CONSTANTS;
module.exports.TICKET_CONSTANTS = TICKET_CONSTANTS;
module.exports.CATEGORY_CONSTANTS = CATEGORY_CONSTANTS;
module.exports.PHASE_CONSTANTS = PHASE_CONSTANTS;
module.exports.WORKFLOW_CONSTANTS = WORKFLOW_CONSTANTS;
module.exports.DEPARTMENT_CONSTANTS = DEPARTMENT_CONSTANTS;
module.exports.VENDOR_CONSTANTS = VENDOR_CONSTANTS;
module.exports.UPLOAD_CONSTANTS = UPLOAD_CONSTANTS;