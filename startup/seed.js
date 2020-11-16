const { User } = require("../models/user");
const { Role } = require("../models/role");
const bcrypt = require("bcryptjs");

module.exports = async () => {

  var roleAdmin = await Role.findOne({role:"admin"});
  // console.log(roleAdminExists)
  if(!roleAdmin) roleAdmin = await Role.create({ role: "admin", status: "active" });
  
  var roleUser = await Role.findOne({role:"user"});
  // console.log(roleUserExists)
  if(!roleUser) roleUser = await Role.create({ role: "user", status: "active" });

  var roleApprover = await Role.findOne({role:"approver"});
  // console.log(roleApproverExists)
  if(!roleApprover) roleApprover = await Role.create({ role: "approver", status: "active" });
  

  const userExists = await User.findOne({ email: "anselm.mba@pap.com", phone: "0123456789", status: "active" });

  if(!userExists && roleAdmin && roleUser) {
    const password = "12345678";
    const user = await User.create({ firstName: "Anselm", lastName: "Starboy", email: "anselm.mba@pap.com", phone: "0123456789", password, roles: [ roleAdmin._id, roleUser._id ], status: "active", isVerified: true });
    
    //create salt for user password hash
    const salt = await bcrypt.genSalt(10);

    //hash password and replace user password with the hashed password
    user.password = await bcrypt.hash(password, salt);

    // save user to db
    await user.save();
    console.log("seed user \"admin\" created...");
  }

  const user2Exists = await User.findOne({ email: "starboy@kassandah.com", phone: "0123456789", status: "active" });

  if(!user2Exists && roleAdmin && roleUser) {
    const password = "12345678";
    const user2 = await User.create({ firstName: "Anselm", lastName: "Starboy", email: "starboy@kassandah.com", phone: "0123456789", password, roles: [ roleAdmin._id, roleUser._id ], status: "active", isVerified: true });
    
    //create salt for user password hash
    const salt = await bcrypt.genSalt(10);

    //hash password and replace user password with the hashed password
    user2.password = await bcrypt.hash(password, salt);

    // save user to db
    await user2.save();
    console.log("seed user2 \"admin\" created...");
  }
  
}