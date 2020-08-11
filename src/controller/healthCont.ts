import { Request, Response } from 'express';

export const healthGet = (_: Request, res: Response) => res.send('health check');
