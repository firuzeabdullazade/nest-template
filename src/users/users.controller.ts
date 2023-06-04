import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators';
import { RegisterUserRequest } from 'src/models/registerUserRequest';
import { User } from 'src/models/user';
import { UsersService } from './users.service';
import { LoginRequest } from 'src/models/loginRequest';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/login')
  loginUser(@Body() request: LoginRequest): User {
    return this.usersService.getUser(request.username, request.password);
  }

  @Post()
  registerUser(@Body() request: RegisterUserRequest): number {
    console.debug(request);
    return this.usersService.register(request);
  }

  @Get('/current')
  getCurrentUser(): User {
    return {
      email: 'mail@mail.com',
      firstName: 'John',
      lastName: 'Doe',
      id: 42,
      password: '',
      avatar: '',
    };
  }
}
