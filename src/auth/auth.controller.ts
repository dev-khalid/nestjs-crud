import { AuthService } from './auth.service';
import { Post, Get, Controller, Query, HttpCode, Res } from '@nestjs/common';
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  @HttpCode(204)
  signin(@Query('ghorardim') query, @Res() res): string {
    console.log('login er vetorer query gula', query);
    if (query.ghorardim)
      return res.status(401).json({
        msg: 'faul request!',
      });
    else return res.send('this should be this!');
  }
}
