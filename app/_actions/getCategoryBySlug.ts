import blog from "../db/blog.json";
import { Blog } from "../types/blog";

blog as Blog;

const getCategoryBySlug = (slug: string) => {
  return blog.categories.find((item) => item.slug === slug);
};

export default getCategoryBySlug;
