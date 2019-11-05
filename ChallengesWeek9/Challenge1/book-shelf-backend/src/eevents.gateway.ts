import {
  SubscribeMessage,
  WebSocketGateway,
  MessageBody,
  OnGatewayConnection,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'tls';

@WebSocketGateway(4001)
export class EeventsGateway {
  @WebSocketServer() wss: Server;
}
