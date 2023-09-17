import { URLSearchParams } from "url";
import blog from "../db/blog.json";
import delay from "../helpers/delay";
import { Blog } from "../types/blog";
import { Pagination } from "../types/pagination";
import { PostWithCategories } from "../types/post";
import getCategoriesByIds from "./getCategoriesByIds";
import getCategoryBySlug from "./getCategoryBySlug";

blog as Blog;

const getPosts = async (
  params: URLSearchParams
): Promise<{ data: PostWithCategories[]; pagination: Pagination }> => {
  await delay();

  const searchParams = new URLSearchParams(params);

  const category = searchParams.get("category");
  const page = searchParams.get("page");
  const titleText = searchParams.get("titleText");
  const limit = searchParams.get("limit");

  const currentPage = page ? Number(page) : 1;
  const currentLimit = Number(limit) || 3;

  let result = blog.posts;

  if (category) {
    const currentCategory = getCategoryBySlug(category);

    if (currentCategory) {
      result = result.filter((item) =>
        item.categories.includes(Number(currentCategory.id))
      );
    }
  }

  if (titleText) {
    result = result.filter((item) =>
      new RegExp(titleText.toLowerCase(), "gi").test(item.title)
    );
  }

  const totalRecords = result.length;
  const totalPages = Math.ceil(result.length / currentLimit);

  const pagination: Pagination = {
    currentPage,
    nextPage: currentPage + 1 <= totalPages ? currentPage + 1 : null,
    prevPage: currentPage - 1 > 0 ? currentPage - 1 : null,
    totalPages,
    totalRecords,
  };

  const startPos = (currentPage - 1) * currentLimit;

  result = result.slice(startPos, startPos + currentLimit);

  let postsWithCategories: PostWithCategories[] = [];

  for (let p of result) {
    postsWithCategories.push({
      ...p,
      categories: getCategoriesByIds(p.categories),
    });
  }

  return {
    data: postsWithCategories,
    pagination,
  };
};

export default getPosts;
