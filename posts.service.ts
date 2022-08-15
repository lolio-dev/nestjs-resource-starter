import { Injectable } from '@nestjs/common';
import { PostsAdapter } from "./posts.adapter";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "./entities/post.entity";
import { Repository } from "typeorm";
import { CreatePostDto } from "./dto/create-post.dto";
import PostNotFoundException from "./exceptions/postNotFound.exception";

@Injectable()
export class PostsService {
  constructor(
    private readonly postsAdapter: PostsAdapter,
    @InjectRepository(Post)
    private readonly postsRepository: Repository<Post>
  ) {}

  async createPost(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = await this.postsRepository.create(createPostDto);

    return await this.postsRepository.save(newPost);
  }

  async findAllPosts(): Promise<Post[]> {
    return await this.postsRepository.find()
  }

  async findOnePostById(postId: number): Promise<Post> {
    const post = this.postsRepository.findOneBy({ id: postId })

    if (!post) {
      throw new PostNotFoundException(postId);
    }

    return post;
  }
}
