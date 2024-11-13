import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Get,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Endpoint to create a new user
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() createUserDto: CreateUserDto) {
    const newUser = await this.usersService.create(createUserDto);
    return {
      message: 'User created successfully',
      data: newUser,
    };
  }

  // Optional: Endpoint to validate user login
  //   @Post('login')
  //   @HttpCode(HttpStatus.OK)
  //   async login(@Body() loginDto: { email: string; password: string }) {
  //     const { email, password } = loginDto;
  //     const user = await this.usersService.validateUser(email, password);

  //     if (!user) {
  //       return {
  //         message: 'Invalid credentials',
  //         status: HttpStatus.UNAUTHORIZED,
  //       };
  //     }

  //     return {
  //       message: 'Login successful',
  //       user,
  //     };
  //   }

  @Get('/hello')
  async hellouser(): Promise<any> {
    console.log(
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject('Promise resolved successfully!');
        }, 1000);
      }),
    );
    return 'Welcome Home';
  }
}
