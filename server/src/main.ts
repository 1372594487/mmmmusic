/*
 * @Author: zywOo
 * @Date: 2022-09-25 19:56:11
 * @LastEditors: zywOo
 * @LastEditTime: 2022-09-25 23:38:23
 * @FilePath: \server\src\main.ts
 * @Description:
 *
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved.
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'xiao',
      rolling: true,
      name: 'xiao.sid',
      cookie: { maxAge: 99999999 },
    }),
  );
  await app.listen(3000);
}
bootstrap();
