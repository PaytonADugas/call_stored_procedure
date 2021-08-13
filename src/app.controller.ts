import { Controller, Get, Post, Render, Body, Res, Req} from '@nestjs/common';
import { AppService } from './app.service';
import { getConnection } from "typeorm";
const db = require('./config/database.js');
var calls = require('../public/storedProcedureCalls/calls.json');

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  async root(){
    //const connection = getConnection();
    // const arr = connection.query()
    const result = await db.query('SELECT TOP (100) * FROM [dbo].[storedProc]');
    return {data: result[0]};
  }

  @Post()
  async redirect(@Req() req, @Res() res){
    //const connection = getConnection();
    if(req.body.buttonPress=='update'){
      const query = calls.call_1 + (req.body.columnToChange).toString();

      //connection.query(query);
      await db.query(query);

    }else if(req.body.buttonPress=='insert')

      //connection.query(calls.call_2);
      await db.query(calls.call_2);

    return res.redirect('/');
  }
}
