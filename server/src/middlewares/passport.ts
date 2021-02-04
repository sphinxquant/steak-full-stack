import passport from 'passport';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import config from '../config';

passport.serializeUser(function (user: any, done) {
  done(null, user);
});

passport.deserializeUser(function (user: any, done) {
  done(null, user);
});

console.log(config);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: config.twitter.consumerKey,
      consumerSecret: config.twitter.consumerSecret,
      callbackURL: config.twitter.callbackURL,
    },
    function (accessToken, refreshToken, profile, done) {
      return done(null, profile);
    }
  )
);

export default passport;
