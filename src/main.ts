import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import {createConnection, Connection} from "typeorm";

var server = 'aggregatesqlserver.database.windows.net'
var database = 'AGGREGATEDEVDB'
var username = 'sqladmin'
var password = 'LoveYourNeighbor!'
var driver= '{ODBC Driver 17 for SQL Server}'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
    );

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');

    const connection = createConnection({
        type: "mssql",
        host: server,
        username: username,
        password: password,
        database: database,
    });

  await app.listen(3000);
}
bootstrap();
