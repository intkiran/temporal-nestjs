import { Worker } from '@temporalio/worker';
import activities from './activities';
import { FactoryProvider } from '@nestjs/common';

export const workerProviders: FactoryProvider<Worker>[] = [
  {
    provide: 'worker_provider',
    useFactory: async () => {
      const worker = await Worker.create({
        workflowsPath: require.resolve('./workflows'),
        activities,
        taskQueue: 'hello-world',
      });

      worker.run().catch((error) => {
        console.error('Error: ', error);
        process.exit(1);
      });

      console.log('Worker started!');

      return worker;
    },
  },
];