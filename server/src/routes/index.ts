import { Router } from 'express';
import entity from './entity';

const routes = Router();

routes.use('/entity', entity);

export default routes;
