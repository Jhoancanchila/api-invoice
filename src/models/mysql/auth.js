const db = require("../../../db");
const bcrypt = require('bcrypt');

const getUser = async({ username }) => {
  const [ user ] = await db.query(`SELECT * FROM user where email='${username}'`);
  return user;
}
const createUser = async({ user }) => {
  const hashedPassword = await bcrypt.hash(user.password, 10);
  const [ userCreated ] = await db.query(`INSERT INTO user
  (email, pass, role_id)
  VALUES('${user.email}', '${hashedPassword}', ${2})`);
  return userCreated;
}

module.exports = {
  getUser,
  createUser
}