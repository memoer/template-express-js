import app from '@/config/app';
import Database from '@/db';
import log from '@/lib/log';

class Server {
  private database: Database | null = null;
  private server: typeof app | null = null;
  public constructor(server: typeof app, database: Database) {
    this.server = server;
    this.database = database;
  }
  private testDBConnection() {
    if (!this.database) {
      // prettier-ignore
      throw new Error(log('database', 'error : database is null in Server Class [ src/index.ts ]'));
    }
    return this.database.getConnection();
  }
  private serverOn() {
    if (!this.server) {
      // prettier-ignore
      throw new Error(log('server', 'error : server is null in Server Class [ src/index.ts ]'));
    }
    // prettier-ignore
    this.server.listen(app.get('PORT'), () => { log('server', `running on the port >> ${process.env.SERVER_PORT}`) });
  }
  public async run() {
    try {
      await this.testDBConnection();
      await this.serverOn();
    } catch (error) {
      console.error(error.message);
    }
  }
}

const server = new Server(app, new Database());
server.run();
