import { Response, Request } from 'express';

export const apiGet = (_: Request, res: Response) =>
  res.send('get api "/" url');
