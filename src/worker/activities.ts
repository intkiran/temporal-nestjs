
async function accessLogActivity(client_name: string): Promise<string> {
  return `Hello world! ${client_name}`;
}

async function grpcCall(client_name: string): Promise<string> {
  return `Hello world! ${client_name}`;
}
export default {
  accessLogActivity,
  grpcCall
};

