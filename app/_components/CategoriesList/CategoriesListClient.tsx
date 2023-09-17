"use client";

import React, { useState } from "react";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Category } from "@/app/types/category";

interface Props {
  categories: Category[];
}

const CategoriesListClient: React.FC<Props> = ({ categories }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [checkedCategory, setCheckedCategory] = useState(
    searchParams.get("category")
  );

  const onChangeCategory = (slug: string) => {
    let currentQuery = {};

    if (searchParams) {
      currentQuery = qs.parse(searchParams.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: slug,
      page: 1,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true, skipEmptyString: true }
    );
    setCheckedCategory(slug);
    router.push(url, {
      scroll: false,
    });
  };

  return (
    <div className="flex flex-row gap-3 flex-wrap">
      {categories.map((item) => (
        <div
          onClick={() => onChangeCategory(item.slug)}
          className={`cursor-pointer p-2 border rounded-xl ${
            item.slug === checkedCategory ? "bg-green-400" : ""
          }`}
          key={item.id}
        >
          {item.name}
        </div>
      ))}
      <div
        onClick={() => onChangeCategory("")}
        className={`cursor-pointer p-2 border rounded-xl ${
          !checkedCategory ? "bg-green-400" : ""
        }`}
      >
        All
      </div>
    </div>
  );
};

export default CategoriesListClient;
