import Module from '@shared/decorators/Module';
import AxiosControlIDApiProvider from '@shared/container/providers/ControlIdApiProvider/implementations/AxiosControlIDApiProvider';
import SocketIOWebSocketProvider from '@shared/container/providers/WebSocketProvider/implementations/SocketIOWebSocketProvider';

@Module({
  name: 'ContainerProviders',
  providers: [
    {
      provideAs: 'ControlIdAPIProvider',
      useClass: AxiosControlIDApiProvider,
    },
    {
      provideAs: 'WebSocketProvider',
      useClass: SocketIOWebSocketProvider,
    },
  ],
})
export default class Providers {}
