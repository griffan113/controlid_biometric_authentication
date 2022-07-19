import { inject, injectable } from 'tsyringe';

import IObjectChanges from '@modules/notifications/types/IObjectChanges';
import IControlIdApiProvider from '@shared/container/providers/ControlIdAPIProvider/models/IControlIdApiProvider';

interface IRequest {
  object_changes: IObjectChanges[];
  device_id: number;
  time: number;
}

@injectable()
class OnCreateAccessLogService {
  constructor(
    @inject('ControlIdAPIProvider')
    private controlIdApiProvider: IControlIdApiProvider,
  ) {}

  public async execute({ object_changes }: IRequest) {
    console.log(object_changes);

    console.log(this.controlIdApiProvider.isAuthenticated);
  }
}

export default OnCreateAccessLogService;
