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
    async getAllUser() { 
        const users = await this.userModel.find(); //this.userModel er pore ja ja ache sob mongoose er model so tui mongoose theke documentation porbi 
        return users; 
    }
    async updateUser(userData) { 
        const updatedUser = await this.userModel.findByIdAndUpdate(userData.id,userData,{new: true}); 
        return updatedUser;
    }
    async removeUser(id) { 
        const updatedUser = await this.userModel.findByIdAndDelete(id); 
        console.log('delete ho vai ',id); 
        return updatedUser;
    }
}
//eita ashol folder 
//jeikhane database a data insert hoy 