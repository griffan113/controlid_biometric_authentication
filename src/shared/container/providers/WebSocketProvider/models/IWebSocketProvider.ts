import { Server as WebSocketServer } from 'socket.io';
import { Server as HTTPServer } from 'http';

export default interface IWebSocketProvider {
  server: WebSocketServer;
  init(httpServer: HTTPServer): void;
}
