declare namespace NodeJS {
  interface Process {
    env: ProcessEnv;
  }
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production';
    SERVER_PORT: string | undefined;
    TYPEORM_CONNECTION: string;
    TYPEORM_HOST: string;
    TYPEORM_PORT: string;
    TYPEORM_USERNAME: string;
    TYPEORM_PASSWORD: string;
    TYPEORM_DATABASE: string;
    TYPEORM_SYNCHRONIZE: 'true' | 'false';
    TYPEORM_LOGGING: 'true' | 'false';
    TYPEORM_ENTITIES: string;
    TYPEORM_ENTITIES_DIR: string;
    TYPEORM_MIGRATIONS: string;
    TYPEORM_MIGRATIONS_DIR: string;
    SENTRY_DSN: string;
  }
}
