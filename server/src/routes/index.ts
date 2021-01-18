import { Router } from 'express';
import entity from './entity';

const routes = Router();

routes.use('/v1', entity);

export default routes;
