import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import cookieSession from 'cookie-session';
import passport from './middlewares/passport';
import { isLoggedIn } from './middlewares/auth';

import config from './config';
import routes from './routes';

const CreateServer = (clientPath: string) => {
  const app = express();
  const PORT = config.server.port;

  app.use(
    cookieSession({
      name: 'twitter-auth-session',
      keys: ['key1', 'key2'],
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.static(clientPath));

  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());

  app.use(express.static(__dirname, { dotfiles: 'allow' }));

  app.get('/', isLoggedIn, (req: express.Request, res: express.Response) => {
    console.log(req.user);
    res.send(`Hello world ${req}`);
  });
  app.get('/logout', (req: express.Request, res: express.Response) => {
    req.session = null;
    req.logout();
    res.redirect('/');
  });
  app.get('/auth/error', (req: express.Request, res: express.Response) =>
    res.send('Unknown Error')
  );
  app.get('/auth/twitter', passport.authenticate('twitter'));
  app.get(
    '/auth/twitter/callback',
    passport.authenticate('twitter', { failureRedirect: '/auth/error' }),
    function (req: express.Request, res: express.Response) {
      res.redirect('/');
    }
  );

  app.use('/api', routes);

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
};

export default CreateServer;
