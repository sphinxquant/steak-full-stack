import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import cors from 'cors';
import config from './config';
import routes from './routes';

const CreateServer = (clientPath: string) => {
  const app = express();
  const PORT = config.server.port;

  app.use(express.static(clientPath));

  app.use(cors());
  app.use(helmet());
  app.use(bodyParser.json());

  app.use('/api', routes);

  app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
  });
};

export default CreateServer;
