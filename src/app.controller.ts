import { Controller, Get, Post, Render, Body, Res} from '@nestjs/common';
import { AppService } from './app.service';
import {getConnection} from "typeorm";

var calls = require('../public/storedProcedureCalls/calls.json');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async root(){
    const connection = getConnection();
    const arr = await connection.query('SELECT TOP (1) * FROM [dbo].[test_store_proc]');
    return {data: arr[0].someData};
  }

  @Post()
  redirect(@Res() res){
    const connection = getConnection();
    connection.query(calls.call);
    return res.redirect('/');
  }
}
