import cors = require('cors');
import * as express from 'express';
import loginRouter from './routers/loginRouter';

class App {
  public app: express.Express;
  // ...

  constructor() {
    this.app = express();
    this.app.use(express.json()); // Mais de 1 hora travado por causa da ordem dessas linhas 🥲
    this.app.use(cors());
    this.config();
    // ...
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use('/login', loginRouter);
    // ...
  }

  // ...
  public start(PORT: string | number):void {
    this.app.listen(PORT, () => {
      console.log(`Listening on ${PORT}`);
    });
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
