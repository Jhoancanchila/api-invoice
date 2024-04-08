const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');

const authService = require('../../models/mysql/auth');
const { config } = require('../../config/config');


 module.exports = new Strategy(
    {
      secretOrKey: config.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false
    },
    async function(tokenPayload, done) {
      try {
        const [ user ] = await authService.getUser( tokenPayload.email );

        if (!user) {
          return done(null, false, "Unauthorized");
        }

        delete user.pass;

        return done(null, { ...user, scopes: tokenPayload.scopes });
      } catch (error) {
        return done(error);
      }
    }
  )