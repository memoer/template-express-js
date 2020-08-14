import app from '@config/app';
import Database from '@db';
import { log } from '@lib/utils';

class Server {
  private database: Database | null = null;

  private server: typeof app | null = null;

  public constructor(server: typeof app, database: Database) {
    this.server = server;
    this.database = database;
  }

  private testDBConnection() {
    if (!this.database) {
      throw new Error(log('database', 'error : database is null in Server Class [ src/index.ts ]'));
    }
    return this.database.connect();
  }

  private serverOn() {
    if (!this.server) {
      throw new Error(log('server', 'error : server is null in Server Class [ src/index.ts ]'));
    }
    if (!process.env.NODE_PORT && process.env.NODE_ENV === 'production') {
      throw new Error(log('server', 'error : server port is undefined in production environment'));
    }
    const SERVER_PORT = process.env.SERVER_PORT || 3000;
    this.server.listen(SERVER_PORT, () => {
      log('server', `running on the port >> ${SERVER_PORT}`);
    });
  }

  public async up() {
    try {
      await this.testDBConnection();
      this.serverOn();
    } catch (error) {
      throw new Error(error);
    }
  }
}

const server = new Server(app, new Database());
server.up();
