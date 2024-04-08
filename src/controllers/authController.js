const passport = require('passport');
const jwt = require("jsonwebtoken");
const authService = require("../models/mysql/auth");
const { config } = require('../config/config');
const validateUser = async(req, res, next) => {
  try { 

    passport.authenticate("local",{ session:false }, function(error,user,info){
      if(error) return res.status(500).json(error);
      if(!user) return res.status(400).json(info);
      const token = jwt.sign(user,config.authJwtSecret,{ expiresIn: "1h" });

      const { id, email, role_id } = user;

      return res.status(200).json({ token, user: { id, email,role_id } });

    })( req, res, next );
    
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
}
const createUser = async(req, res) => {
  try {   
    const { body: user } = req;
    const userCreated = await authService.createUser({ user });
    res.status(200).json({
      success: true,
      data: userCreated
    })
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message
    });
  }
}

module.exports = {
  validateUser,
  createUser
}