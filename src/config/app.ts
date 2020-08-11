import express from 'express';
import helmet from 'helmet';
import compression from 'compression';
import * as Sentry from '@sentry/node';
import configEnv from './env';
import apolloServer from './apolloServer';
import configLog from './log';
import router from '@/router';
import errorHandler from '@/middleware/errorHandler';

const app = express();

configEnv();
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
configLog(app);

app.use(router);
apolloServer.applyMiddleware({ app, path: '/graphql' });

if (process.env.NODE_ENV === 'production') {
  app.use(Sentry.Handlers.errorHandler());
}
app.use(errorHandler);

export default app;
