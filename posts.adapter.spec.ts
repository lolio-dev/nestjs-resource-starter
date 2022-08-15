import { Test, TestingModule } from '@nestjs/testing';
import { PostsAdapter } from "./posts.adapter";

describe('Post Adapter', () => {
  let adapter: PostsAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsAdapter],
    }).compile();

    adapter = module.get<PostsAdapter>(PostsAdapter);
  });

  it('should be defined', () => {
    expect(adapter).toBeDefined();
  });

  it('should test method return good text', () => {
    const test = adapter.test();

    expect(test).toEqual('hello world');
  })
});
