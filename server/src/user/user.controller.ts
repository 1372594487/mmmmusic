/*
 * @Author: zywOo
 * @Date: 2022-09-25 21:22:35
 * @LastEditors: zywOo
 * @LastEditTime: 2022-09-26 18:44:47
 * @FilePath: \mmmmusic\server\src\user\user.controller.ts
 * @Description:
 *
 * Copyright (c) 2022 by error: git config user.name && git config user.email & please set dead value or install git, All Rights Reserved.
 */
import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Version,
  Req,
  Res,
  Session,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
// @Controller({
//   path: 'user',
//   version: '1',
// })
export class UserController {
  constructor(private readonly userService: UserService) { }
  @Get('code')
  createCode(@Req() req, @Res() res, @Session() session) {
    this.userService.createCode(req, res, session);
  }
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get()
  @Version('1')
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
