import { Controller, Get, Post, Delete, Param, Body, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { formatWithOptions } from 'util';

@Controller('api')
export class AppController {
  constructor(public appService: AppService) {

  }


  @Get('/get:id')
  getFormula(@Param('id') id) {
    return this.appService.getFormula(id);
  }

  @Post('/post')
  postObj(@Body() obj) {
    return this.appService.postObj(obj);
  }

  @Delete('delete:id')
  deleteFromFormula(@Param('id') id) {
    return this.appService.deleteFromFormula(id);
  }
  @Put('put:id') 
  putFormula(@Param('id') id) {
    return this.appService.putFormula(id)
  }
  @Get('getquery')
  getQueryFormula(@Query() filters) {
    return this.appService.getQueryFormula(filters.min, filters.max)
  }
}
