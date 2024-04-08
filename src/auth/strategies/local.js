const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const authService = require("../../models/mysql/auth");

module.exports = new LocalStrategy({session: false },async (username,password,done) => {
  try {
    const [ user ] = await authService.getUser({ username });
    if(!user) return done(null,false,"email or password invalid");
    const matchPass = bcrypt.compareSync(password,user.pass);
    if(!matchPass) return done(null,false,"email or password invalid");
    delete user.pass;
    return done(null,user)
  } catch (error) {
    done(error);
  }
});
