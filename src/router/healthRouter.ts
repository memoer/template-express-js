import { Router } from 'express';
import { healthGet } from '@/controller/healthCont';

const healthRouter = Router();

healthRouter.get('/health', healthGet);

export default healthRouter;
