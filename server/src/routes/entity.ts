import { Router } from 'express';
import * as EntityController from '../controllers/EntityController';

const router = Router();
//Login route
router.get('/entities', EntityController.getEntities);

export default router;
