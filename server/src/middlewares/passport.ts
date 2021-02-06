import passport from 'passport';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import config from '../config';

passport.serializeUser(function (user, done) {
  const userCookie = user as any;
  done(null, {
    id: userCookie.id,
    username: userCookie.username,
    displayName: userCookie.displayName,
  });
});

passport.deserializeUser<any, any>(function (user, done) {
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
