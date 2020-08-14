import { Router } from 'express';
import { apiGet } from '@controller/api';

const apiRouter = Router();

apiRouter.get('/', apiGet);

export default apiRouter;
