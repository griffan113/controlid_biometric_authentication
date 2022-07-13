import { Request, Response } from 'express';
import { container } from 'tsyringe';

import OnCreateAccessLogService from '@modules/events/services/OnCreateAccessLog.service';

export default class OnCreateAccessLogController {
  public async index(req: Request, res: Response): Promise<Response> {
    const onCreateAccessLogService = container.resolve(OnCreateAccessLogService);

    await onCreateAccessLogService.execute(req.body);

    return res.send();
  }
}
