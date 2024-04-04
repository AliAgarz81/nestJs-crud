import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import { Todo } from './todos/todos.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [Todo],
      synchronize: true,
    }),

    TodosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
