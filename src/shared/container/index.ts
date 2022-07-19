import { container } from 'tsyringe';

import '@shared/container/providers';
import '@modules/notifications/notifications.module';
import context from '@shared/container/modulesContext';

context.data.forEach(module => {
  module.providers?.forEach(provider => {
    container.registerSingleton(provider.provideAs, provider.useClass);
  });
});
