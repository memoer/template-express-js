import { Router } from 'express';
import healthRouter from './healthRouter';
import apiRouter from './api';

const router = Router();

router.use(healthRouter);
router.use('/api', apiRouter);

export default router;
