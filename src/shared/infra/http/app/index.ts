import express, { Express } from 'express';
import { container } from 'tsyringe';

import IControlIdApiProvider from '@shared/container/providers/ControlIdApiProvider/models/IControlIdApiProvider';
import AppError from '@shared/errors/AppError';
import setupMiddlewares from '@shared/infra/http/middlewares';
import setupErrors from '@shared/infra/http/middlewares/errors';
import setupRoutes from '@shared/infra/http/routes';

class App {
  private express: Express;

  constructor() {
    this.express = express();

    setupMiddlewares(this.express);
    setupRoutes(this.express);
    setupErrors(this.express);

    this._startupProviders();

    this.express.disable('x-powered-by');
  }

  public init(port: string | number) {
    this.express.listen(port, () => {
      console.log('\x1b[32m', `🚀 Server running on port ${port}.`);
    });
  }

  private async _startupProviders() {
    try {
      const controlIdApiProvider = container.resolve<IControlIdApiProvider>('ControlIdAPIProvider');

      await controlIdApiProvider.authenticate();
    } catch (error) {
      if (error instanceof AppError) {
        throw new AppError(error.message);
      }
    }
  }
}

export default App;
