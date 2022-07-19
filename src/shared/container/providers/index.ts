import Module from '@shared/decorators/Module';
import AxiosControlIDAPIProvider from '@shared/container/providers/ControlIdAPIProvider/implementations/AxiosControlIDAPIProvider';

@Module({
  name: 'ContainerProviders',
  providers: [
    {
      provideAs: 'ControlIdAPIProvider',
      useClass: AxiosControlIDAPIProvider,
    },
  ],
})
export default class Providers {}
