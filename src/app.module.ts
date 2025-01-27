import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { PostsModule } from './posts/posts.module';
import { CreaturesModule } from './creatures/creatures.module';

@Module({
  imports: [PrismaModule, PostsModule, CreaturesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
