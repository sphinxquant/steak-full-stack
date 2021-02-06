import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import cookieSession from 'cookie-session';
import passport from './middlewares/passport';

import config from './config';
import routes from './routes';

const CreateServer = (clientPath: string) => {
  const app = express();
  const PORT = config.server.port;

  app.use(
    cookieSession({
      domain: 'steakcoins.com',
      secureProxy: true,
      name: 'twitter-auth-session',
      keys: [config.auth.jwtSecret, config.auth.jwtSecretTwo],
      maxAge: 24 * 60 * 60 * 100,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.static(clientPath));

  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());

  app.use(express.static(__dirname, { dotfiles: 'allow' }));

  app.use('/api', routes);

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
};

export default CreateServer;
