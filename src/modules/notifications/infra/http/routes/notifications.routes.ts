import { Router } from 'express';

import OnCreateAccessLogController from '@modules/notifications/infra/http/controllers/OnCreateAccessLog.controller';
import { celebrate, Segments, Joi } from 'celebrate';

const notificationsRouter = Router();

const onCreateAccessLogController = new OnCreateAccessLogController();

notificationsRouter.post(
  '/dao',
  celebrate({
    [Segments.BODY]: {
      object_changes: Joi.array()
        .items(
          Joi.object({
            object: Joi.string().required(),
            type: Joi.string().required(),
            values: Joi.object({
              id: Joi.string().required(),
              time: Joi.number().required(),
              event: Joi.string().required(),
              device_id: Joi.number().required(),
              identifier_id: Joi.string().required(),
              user_id: Joi.string().required(),
              portal_id: Joi.string().required(),
              identification_rule_id: Joi.string().required(),
              card_value: Joi.string().required(),
              log_type_id: Joi.string().required(),
            }).required(),
          }).required(),
        )
        .required(),
      device_id: Joi.number().required(),
      time: Joi.number().required(),
    },
  }),
  onCreateAccessLogController.index,
);

export default notificationsRouter;
