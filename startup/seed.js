const { User } = require("../models/user");
const { Role } = require("../models/role");
const bcrypt = require("bcrypt");

module.exports = async () => {

  var roleAdminExists = await Role.findOne({role:"admin"});
  // console.log(roleAdminExists)
  if(!roleAdminExists) await Role.create({ role: "admin", status: "active" });
  
  var roleUserExists = await Role.findOne({role:"user"});
  // console.log(roleUserExists)
  if(!roleUserExists) await Role.create({ role: "user", status: "active" });
  

  const userExists = await User.findOne({ email: "anselm.mba@pap.com", phone: "0123456789", status: "active" });
  const adminRole = await Role.findOne({role:"admin"});

  if(!userExists && adminRole) {
    const password = "12345678";
    user = await User.create({ firstName: "Anselm", lastName: "Starboy", email: "anselm.mba@pap.com", phone: "0123456789", password, roleId: adminRole._id, status: "active", isVerified: true });
    
    //create salt for user password hash
    const salt = await bcrypt.genSalt(10);

    //hash password and replace user password with the hashed password
    user.password = await bcrypt.hash(password, salt);

    // save user to db
    await user.save();
    console.log("seed user \"admin\" created...");
  }

  
}