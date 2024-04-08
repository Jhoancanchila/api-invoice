const passport = require('passport');

 const authorized = (req, res, next) => {

  passport.authenticate("jwt", { session:false}, function (error, user, info){
    if(error) return res.status(500).json(error);
    if(!user) return res.status(401).json(info);
    req.user = user;
    next();
  })(req, res, next)
}

module.exports = {authorized};