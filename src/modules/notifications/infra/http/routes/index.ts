import { Router } from 'express';

import notificationsRouter from './notifications.routes';

const routes = Router();

routes.use('/notifications', notificationsRouter);

export default routes;
