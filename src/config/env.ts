import path from 'path';
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';

export default () => {
  const envFileList = [`.env.${process.env.NODE_ENV}`, '.env.api-key'];
  envFileList.forEach((envFile) => dotenvExpand(dotenv.config({ path: path.resolve(envFile) })));
};
