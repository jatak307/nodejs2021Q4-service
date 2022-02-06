import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import path from 'path';
import { Connection, QueryRunner } from 'typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { generateHash } from './common/helpers/generate-hash';
import { Board } from './resources/boards/entity/board.entity';
import { ResourcesModule } from './resources/resources.module';
import { Task } from './resources/tasks/entity/task.entity';
import { User } from './resources/users/entity/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      synchronize: true,
      logging: false,
      logger: 'file',
      entities: ["dist/**/*.entity{ .ts,.js}"],
      migrationsRun: false,
      dropSchema: true,
      migrations: ["dist/migrations/*{.ts,.js}"],
      cli: {
        "migrationsDir": "src/migration",
      },
    }),
    ResourcesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
