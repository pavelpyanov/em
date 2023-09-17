import blog from "../db/blog.json";
import { Blog } from "../types/blog";

blog as Blog;

const getCategoriesByIds = (ids: number[]) => {
  return blog.categories.filter((item) => ids.includes(item.id));
};

export default getCategoriesByIds;
