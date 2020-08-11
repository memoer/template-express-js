import { Request, Response } from 'express';

interface Error {
  status?: number;
  name: string;
  message: string;
  stack?: string;
}
export default (err: Error, _: Request, res: Response): void => {
  if (res.headersSent) return;
  const errorStatus = err.status || 500;
  res.status(errorStatus).json(err);
};
