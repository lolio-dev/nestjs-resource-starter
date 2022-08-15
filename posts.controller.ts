import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { PostsService } from './posts.service';
import { Post as PostEntity} from './entities/post.entity';
import { CreatePostDto } from "./dto/create-post.dto";

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  async create(
    @Body() createPostDto: CreatePostDto
  ): Promise<PostEntity> {
    return await this.postsService.createPost(createPostDto);
  }

  @Get()
  async findAll(): Promise<PostEntity[]> {
    return await this.postsService.findAllPosts();
  }

  @Get('/:id')
  async findOneById(
    @Param() id: string
  ): Promise<PostEntity> {
    return await this.postsService.findOnePostById(parseInt(id))
  }
}
