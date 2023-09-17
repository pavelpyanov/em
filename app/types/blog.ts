import { Category } from "./category";
import { Post } from "./post";

export interface Blog {
  posts: Post[];
  categories: Category[];
}
