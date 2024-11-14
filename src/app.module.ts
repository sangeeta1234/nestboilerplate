import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './users/entities/user.entity';
// import typeOrmConfig from './database/db';

@Module({
  imports: [
    // TypeOrmModule.forRoot({ ...typeOrmConfig, entities: [User] }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
