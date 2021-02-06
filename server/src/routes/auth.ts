import express, { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/login/success', (req, res) => {
  if (req.user) {
    res.json({
      success: true,
      message: 'user has successfully authenticated',
      user: req.user,
      cookies: req.cookies,
    });
  } else {
    res.redirect('/api/v1/auth/login/failed');
  }
});

router.get('/login/failed', (req, res) => {
  res.status(401).json({
    success: false,
    message: 'user failed to authenticate.',
  });
});

router.get('/logout', (req: express.Request, res: express.Response) => {
  req.session = null;
  req.logout();
  res.redirect('/');
});

router.get('/error', (req: express.Request, res: express.Response) =>
  res.status(500).json({ error: 'Unknown Error' })
);

router.get('/twitter', passport.authenticate('twitter'));

router.get(
  '/twitter/callback',
  passport.authenticate('twitter', {
    successRedirect: '/',
    failureRedirect: '/api/v1/auth/login/failed',
  })
);

export default router;
