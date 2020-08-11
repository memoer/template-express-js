import 'reflect-metadata'; // for TypeORM
import { createConnection, getConnectionManager, ConnectionManager, Connection } from 'typeorm';
import { log, sleep } from '@/lib/utils';

export default class Database {
  private connectionManager: ConnectionManager;
  private CONNECTION_NAME = 'default';
  constructor() {
    this.connectionManager = getConnectionManager();
  }
  private printSuccessConnection(connection: Connection) {
    log('database', 'successfully connect');
    log('database', '------ TypeORM DB Config ------');
    log('database', `type\t: ${connection.options.type}`);
    log('database', `host\t: ${(connection.options as any).host}`);
    log('database', `port\t: ${(connection.options as any).port}`);
    log('database', `user\t: ${(connection.options as any).username}`);
    log('database', '------ TypeORM DB Config ------');
  }
  private async connect() {
    const LIMIT_CONNECT_TRY = 3;
    const SLEEP_TIME = 3000;
    for (let i = 1; ; i++) {
      log('database', `the number of trying connect to database : ${i} -----------------`);
      log('database', 'create Connection');
      try {
        const connection = await createConnection();
        this.printSuccessConnection(connection);
        return connection;
      } catch (error) {
        if (i >= LIMIT_CONNECT_TRY) {
          log('database', `the number of DB Connection is ${LIMIT_CONNECT_TRY}`);
          log('database', 'restart please after DB Check');
          throw new Error(error);
        }
        log('database', 'cannot create connection');
        log('database', `one more connect after ${SLEEP_TIME} milliseconds...`);
        await sleep(SLEEP_TIME);
      }
    }
  }
  public async getConnection(): Promise<Connection> {
    if (this.connectionManager.has(this.CONNECTION_NAME)) {
      const connection = this.connectionManager.get(this.CONNECTION_NAME);
      try {
        if (connection.isConnected) {
          log('database', 'connection is connected');
          await connection.close();
          log('database', 'connected connection closed');
        }
      } catch (error) {
        throw new Error(error);
      }
    }
    return this.connect();
  }
}
