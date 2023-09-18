import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BookService } from './book/book.service';
import { BookModule } from './book/book.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'build'),
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BookModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [BookService],
})
export class AppModule {}
