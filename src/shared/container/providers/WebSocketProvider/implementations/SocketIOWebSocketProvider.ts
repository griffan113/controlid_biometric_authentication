import { injectable } from 'tsyringe';
import { Server as WebSocketServer } from 'socket.io';
import { Server as HTTPServer } from 'http';

import IWebSocketProvider from '@shared/container/providers/WebSocketProvider/models/IWebSocketProvider';

@injectable()
export default class SocketIOWebSocketProvider implements IWebSocketProvider {
  public server: WebSocketServer;

  public init(httpServer: HTTPServer): void {
    this.server = new WebSocketServer(httpServer);

    if (this.server) console.log('\x1b[32m', `🚀 WebSocket server running.`);

    this.server.on('connection', socket => {
      console.log(socket.id);
    });
  }
}
