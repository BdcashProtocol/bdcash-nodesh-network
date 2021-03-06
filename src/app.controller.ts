import { Controller, Get, Post, Body } from '@nestjs/common'
import { AppService } from './app.service'
let BDCashCore = require('@bdcash-protocol/core')
let bdcash = new BDCashCore

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/status')
  getStatus(): Promise<Object> {
    return this.appService.getStatus();
  }

  @Post('/history')
  async getHistory(@Body() request): Promise<Object> {
    if(request.node !== undefined){
      let nodeshs = await bdcash.returnNodes()
      if(nodeshs.indexOf(request.node) !== undefined){
        return this.appService.getHistory(request.node)
      }else{
        return {
          success: false,
          error: 'Node ' + request.node + ' is not a valid node'
        }
      }
    }else{
      return {
        success: false,
        error: 'Node parameter missing'
      }
    }
  }
}