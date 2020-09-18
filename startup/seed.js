const { User } = require("../models/user");
const { Role } = require("../models/role");
const bcrypt = require("bcrypt");

module.exports = async () => {

  var roleAdmin = await Role.findOne({role:"admin"});
  // console.log(roleAdminExists)
  if(!roleAdmin) roleAdmin = await Role.create({ role: "admin", status: "active" });
  
  var roleUser = await Role.findOne({role:"user"});
  // console.log(roleUserExists)
  if(!roleUser) roleUser = await Role.create({ role: "user", status: "active" });
  

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

  
}