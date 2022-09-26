/*
 * @Author: zywOo
 * @Date: 2022-09-25 21:22:36
 * @LastEditors: zywOo
 * @LastEditTime: 2022-09-26 18:50:57
 * @FilePath: \mmmmusic\server\src\user\user.service.ts
 * @Description:
 *
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved.
 */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as svgCaptcha from 'svg-captcha';

@Injectable()
export class UserService {
  createCode(req, res, session) {
    const captcha = svgCaptcha.create({
      size: 6,
      fontSize: 14,
      width: 200,
      height: 50,
      background: `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256,
      )}, ${Math.floor(Math.random() * 256)}`,
      // background: 'red',
    });
    session.code = captcha.text;
    res.type('image/svg+xml');
    res.send(captcha.data);
  }
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
