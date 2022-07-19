import { Request, Response } from 'express';
import { container } from 'tsyringe';

import OnCreateAccessLogService from '@modules/notifications/services/OnCreateAccessLog.service';

export default class OnCreateAccessLogController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { object_changes, device_id, time } = req.body;

    const onCreateAccessLogService = container.resolve(OnCreateAccessLogService);

    await onCreateAccessLogService.execute({ object_changes, device_id, time });

    return res.send();
  }
}
