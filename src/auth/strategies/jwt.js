const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const authService = require('../../models/mysql/auth');
const { config } = require('../../config/config');


 module.exports = new JwtStrategy(
    {
      secretOrKey: config.authJwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false
    },
    async function(tokenPayload, done) {
      try {
        const [ user ] = await authService.getUser( {username:tokenPayload.email} );

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