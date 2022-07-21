import { inject, injectable } from 'tsyringe';
import { AxiosError } from 'axios';

import IObjectChanges from '@modules/notifications/types/IObjectChanges';
import IUser from '@modules/notifications/types/IUser';
import ITemplate from '@modules/notifications/types/ITemplate';
import Events from '@modules/notifications/types/Events';
import IControlIdApiProvider from '@shared/container/providers/ControlIdApiProvider/models/IControlIdApiProvider';
import AppError from '@shared/errors/AppError';

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

    // Verifica se foi apenas um dado que foi alterado
    if (object_changes.length > 1) return;

    if (object_changes[0].object !== 'access_logs') return;

    if (object_changes[0].values.event !== Events.ACCESS_GRANTED) return;

    // Verifica se o dado foi inserido
    if (object_changes[0].type !== 'inserted') return;

    try {
      const getUsersResponse = await this.controlIdApiProvider.instance.post<{ users: IUser[] }>('load_objects.fcgi', {
        object: 'users',
        where: {
          users: {
            id: object_changes[0].values.user_id,
          },
        },
      });

      const {
        users: [user],
      } = getUsersResponse.data;

      if (user) {
        const getUserTemplateResponse = await this.controlIdApiProvider.instance.post<{ templates: ITemplate[] }>('load_objects.fcgi', {
          object: 'templates',
          where: {
            templates: {
              user_id: user.id,
            },
          },
        });

        const {
          templates: [template],
        } = getUserTemplateResponse.data;

        console.log(template);
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new AppError(`Falha ao realizar a requisição à API Control ID: ${error.message}`);
      }
    }
  }
}

export default OnCreateAccessLogService;
