import { Router } from 'express';
import entity from './entity';
import auth from './auth';

const routes = Router();

routes.use('/v1', entity);
routes.use('/v1/auth', auth);

export default routes;
