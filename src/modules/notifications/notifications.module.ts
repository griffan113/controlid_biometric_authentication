import Module from '@shared/decorators/Module';
import routes from './infra/http/routes';

@Module({
  name: 'Notifications',
  router: routes,
})
export default class NotificationsModule {}
