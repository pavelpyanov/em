import React from "react";
import getCategories from "@/app/_actions/getCategories";
import CategoriesListClient from "./CategoriesListClient";

const CategoriesList: React.FC = () => {
  const categories = getCategories();

  return <CategoriesListClient categories={categories} />;
};

export default CategoriesList;
