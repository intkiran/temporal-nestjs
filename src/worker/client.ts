import { Connection, Client } from '@temporalio/client';

export async function startWorkflow(client_name: string): Promise<string[]> {
  const connection = await Connection.connect();
  const client = new Client({
    connection,
  });

  const handle = await client.workflow.start('AccessLogWorkflow', {
    args: [client_name],
    taskQueue: 'hello-world',
    workflowId: `workflow-id-${Date.now()}`,
  });

  console.log('Started workflow: ', handle.workflowId);

  return await handle.result();
}