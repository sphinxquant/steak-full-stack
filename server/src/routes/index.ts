import { Router } from 'express';
import entity from './entity';
import auth from './auth';
import user from './user';

const routes = Router();

routes.use('/v1', entity);
routes.use('/v1/auth', auth);
routes.use('/v1', user);

export default routes;
