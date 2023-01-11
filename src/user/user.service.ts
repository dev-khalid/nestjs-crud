import { UserDocument } from './../schemas/user.schema';
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { UserSchema } from "src/schemas/user.schema";
import { Model } from 'mongoose';
import { UserDto } from "./user.dto";
@Injectable({})
export class UserService{
    constructor(@InjectModel('User') private userModel: Model<UserDocument>) {}
    async createUser(userDto) {
        const data = await this.userModel.create(userDto); 
        console.log(data); 
        return data; 
    }
}