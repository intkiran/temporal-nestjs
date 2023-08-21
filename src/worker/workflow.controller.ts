import {
    Controller,
    Post,
    Body,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  import { startWorkflow } from './client';
  
  @Controller('workflow')
  export class TemporalController {
    @Post('start')
    async deploy(@Body() body: { client_name: string }): Promise<string> {
        console.log(
            "body ",body
        )
      const result = await startWorkflow(body.client_name).catch((error) => {
        throw new HttpException(
          `Error: ${error?.message}`,
          HttpStatus.BAD_REQUEST,
        );
      });
  
      return JSON.stringify(result);
    }
  }