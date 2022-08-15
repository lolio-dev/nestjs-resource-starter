import { NotFoundException } from "@nestjs/common";

class PostNotFoundException extends NotFoundException {
  constructor(postId) {
    super(`Category with id ${postId} not found`);
  }
}

export default PostNotFoundException;
