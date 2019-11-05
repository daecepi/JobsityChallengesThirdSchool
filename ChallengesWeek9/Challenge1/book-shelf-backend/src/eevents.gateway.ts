import { SubscribeMessage, WebSocketGateway, MessageBody, OnGatewayConnection, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'tls';

@WebSocketGateway(4001)
export class EeventsGateway implements OnGatewayConnection {

  @WebSocketServer() wss: Server;

  //Method that handles the mesages
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any, @MessageBody() data: string): string {

    this.wss.emit("Message from a client");
    return 'Hello world!';
  }


  handleConnection(){
    console.log("New client connection");
  }
}
