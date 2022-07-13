import Module from '@shared/decorators/Module';
import routes from './infra/http/routes';

@Module({
  name: 'Events',
  router: routes,
})
export default class EventsModule {}
