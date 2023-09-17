import { Category } from "./category";

export interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  categories: number[];
}

export type PostWithCategories = Omit<Post, "categories"> & {
  categories: Category[];
};
