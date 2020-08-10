import { Express } from 'express';
import morgan from 'morgan';
import * as Sentry from '@sentry/node';

export default (app: Express) => {
  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }
  if (process.env.NODE_ENV === 'production') {
    app.use(morgan('combined'));
    app.use(Sentry.Handlers.requestHandler()); // must be the first middleware on the app
  }
};
