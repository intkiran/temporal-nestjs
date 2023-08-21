import { BadRequestException, Inject, Injectable, Logger, OnModuleInit } from "@nestjs/common";
import { ClientGrpc } from "@nestjs/microservices";
import { UserServiceClient } from "../proto/user/user";
import { firstValueFrom } from "rxjs";


@Injectable()
export class ActivitiesService implements OnModuleInit {
    private userServiceClient: UserServiceClient;

  constructor(
     private grpcClient: ClientGrpc,
    ) {}
    onModuleInit() {
        this.userServiceClient = this.grpcClient.getService<UserServiceClient>('UserService');
    }
  
  async getOrders(userId: string): Promise<any> {
    const user = await firstValueFrom(this.userServiceClient.getUser({ id: userId }));
    if(!user || !user.isActive) throw new BadRequestException("User Not found or inactive");
    return {
        'id': 1,
        'name': 'Dummy Order',
        'status': 'PAID',
        'price': '10$'
    }
  }
}