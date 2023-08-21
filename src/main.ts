import { NestFactory } from '@nestjs/core';
import { WorkerModule } from './worker/worker.module';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

async function bootstrap() {
  const app = await NestFactory.create(WorkerModule);
  //app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  // Starts listening for shutdown hooks
  app.enableShutdownHooks();
  await app.listen(8000);
}
bootstrap();
