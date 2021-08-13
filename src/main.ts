import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
import { createConnection, Connection} from "typeorm";
const db = require('./config/database.js');

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(
      AppModule,
    );

    app.useStaticAssets(join(__dirname, '..', 'public'));
    app.setBaseViewsDir(join(__dirname, '..', 'views'));
    app.setViewEngine('hbs');

    // TYPEORM SQL database connectionn
    // const connection = createConnection({
    //     type: "mssql",
    //     host: server,
    //     username: username,
    //     password: password,
    //     database: database,
    // });

    // Seqlelize SQL databae connection
    // This was already set up in the public js folder.  We required it above
  await app.listen(3000);
}
bootstrap();
