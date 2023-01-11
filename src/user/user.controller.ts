import { UserService } from './user.service';
import { UserDto } from './user.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { UserSchema } from 'src/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post('/create')
  async createUser(@Body() userDto: UserDto): Promise<any> {
    console.log('whats inside', userDto);
    return this.userService.createUser(userDto);
  }
}
