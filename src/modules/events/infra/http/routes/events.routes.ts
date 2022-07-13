import { Router } from 'express';

import OnCreateAccessLogController from '@modules/events/infra/http/controllers/OnCreateAccessLog.controller';

const eventsRouter = Router();

const onCreateAccessLogController = new OnCreateAccessLogController();

eventsRouter.post('/:event', onCreateAccessLogController.index);

eventsRouter.post('/new_biometric_image.fcgi', async (req, res) => {
  console.log(req.body);

  return res.send();
});

export default eventsRouter;
