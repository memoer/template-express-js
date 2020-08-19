import dotenv from 'dotenv';
import path from 'path';
import { log } from '@lib/utils';

export default () => {
  const settedEnvKeyList = [
    'SERVER_PORT',
    'SENTRY_DSN',
    'TYPEORM_CONNECTION',
    'TYPEORM_HOST',
    'TYPEORM_PORT',
    'TYPEORM_USERNAME',
    'TYPEORM_PASSWORD',
    'TYPEORM_DATABASE',
    'TYPEORM_SYNCHRONIZE',
    'TYPEORM_LOGGING',
    'TYPEORM_ENTITIES',
    'TYPEORM_MIGRATIONS',
    'TYPEORM_ENTITIES_DIR',
    'TYPEORM_MIGRATIONS_DIR',
  ];
  const isDev = process.env.NODE_ENV !== 'production';
  const envFile = path.resolve(isDev ? '.env.development' : '.env');
  dotenv.config({ path: envFile });
  log('server', '--- successfully set env variables ---');
  settedEnvKeyList.forEach((key) => log('server', `${key}: ${process.env[key]}`));
  log('server', '--- successfully set env variables ---');
};
