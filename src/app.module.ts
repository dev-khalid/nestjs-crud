import { UserController } from './user/user.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User } from './user/user.module';
@Module({
  imports: [
    User,
    MongooseModule.forRoot(
      'mongodb+srv://AKASH:g1yNCB0VaZIUwzTX@cluster0.yuti9id.mongodb.net/nest?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
