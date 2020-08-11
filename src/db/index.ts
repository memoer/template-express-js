import 'reflect-metadata'; // for TypeORM
import { createConnection, getConnectionManager, ConnectionManager } from 'typeorm';
import { log } from '@/lib/utils';

export default class Database {
  private connectionManager: ConnectionManager;

  private CONNECTION_NAME = 'default';

  constructor() {
    this.connectionManager = getConnectionManager();
  }

  public getConnection() {
    const connectionIsExist = this.connectionManager.has(this.CONNECTION_NAME);
    if (!connectionIsExist) {
      throw new Error(
        `DB connection name : "${this.CONNECTION_NAME}" is not exist - getConnection of Database class`,
      );
    }
    return this.connectionManager.get(this.CONNECTION_NAME);
  }

  private async checkConnection() {
    if (this.connectionManager.has(this.CONNECTION_NAME)) {
      const connection = this.getConnection();
      try {
        if (connection.isConnected) {
          log('database', 'connection is already connected');
          await connection.close();
          log('database', 'connected connection closed');
        }
      } catch (error) {
        throw new Error(error);
      }
    }
  }

  private printSuccessConnection(): void {
    const connection = this.getConnection();
    log('database', 'successfully connect');
    log('database', '------ TypeORM DB Config ------');
    log('database', `type\t: ${connection.options.type}`);
    log('database', `host\t: ${(connection.options as any).host}`);
    log('database', `port\t: ${(connection.options as any).port}`);
    log('database', `user\t: ${(connection.options as any).username}`);
    log('database', '------ TypeORM DB Config ------');
  }

  public async connect() {
    try {
      await this.checkConnection();
      await createConnection();
      this.printSuccessConnection();
    } catch (error) {
      throw new Error(error);
    }
  }
}
