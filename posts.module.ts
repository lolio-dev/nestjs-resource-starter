import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PostsAdapter } from "./posts.adapter";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./entities/post.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Post])],
  controllers: [PostsController],
  providers: [PostsService, PostsAdapter]
})
export class PostsModule {}
