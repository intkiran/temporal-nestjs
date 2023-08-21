
import { Module } from '@nestjs/common';
import { workerProviders } from './worker.provider';
import { TemporalController } from './workflow.controller';
import { ActivitiesModule } from 'src/activities/activities.module';

@Module({
  imports: [
     ],

  providers: [...workerProviders],
  controllers: [TemporalController],
})
export class WorkerModule {}