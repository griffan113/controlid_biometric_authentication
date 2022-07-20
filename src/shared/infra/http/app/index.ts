import express, { Express } from 'express';

import IControlIdApiProvider from '@shared/container/providers/ControlIdAPIProvider/models/IControlIdApiProvider';
import AppError from '@shared/errors/AppError';
import setupMiddlewares from '@shared/infra/http/middlewares';
import setupErrors from '@shared/infra/http/middlewares/errors';
import setupRoutes from '@shared/infra/http/routes';
import { container } from 'tsyringe';

class App {
  public express: Express;

  constructor() {
    this.express = express();

    setupMiddlewares(this.express);
    setupRoutes(this.express);
    setupErrors(this.express);

    this._startup();

    this.express.disable('x-powered-by');
  }

  private async _startup() {
    try {
      await container.resolve<IControlIdApiProvider>('ControlIdAPIProvider').authenticate();
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(error.message);
      }
    }
  }
}

export default App;
