import blog from "../db/blog.json";
import { Blog } from "../types/blog";

blog as Blog;

const getCategories = () => {
  return blog.categories;
};

export default getCategories;
