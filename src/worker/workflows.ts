import { proxyActivities } from '@temporalio/workflow';
import  activities  from './activities';

const { accessLogActivity } = proxyActivities<typeof activities>({
  startToCloseTimeout: '1 minute',
  heartbeatTimeout: '10s',
  retry: {
    initialInterval: '5s',
  },
});
// const  { getOrders } = proxyActivities<ActivitiesService>({
//   startToCloseTimeout: '1 minute',
//   heartbeatTimeout: '10s',
//   retry: {
//     initialInterval: '5s',
//   },
// });

export async function AccessLogWorkflow(client_name: string): Promise<string[]> {
  const stages: string[] = [];


  stages.push(await accessLogActivity(client_name));

  return stages;
}
export async function mainworkflow(client_name: string): Promise<string[]> {
  const stages: string[] = [];

  // REST OR GRPC or call method
  // call accesss log activity
  
  //await accessLogActivity(); API SEPARATE CONTAINER
  // call await rollupActivity(); API SEPARATE NEW CONTAINER

  //stages.push(await getOrders(client_name));

  return stages;
}