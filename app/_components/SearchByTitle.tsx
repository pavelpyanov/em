"use client";

import React from "react";
import debounce from "../helpers/debounce";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";

const SearchByTitle: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onSearch = (text: string) => {
    let currentQuery = {};

    if (searchParams) {
      currentQuery = qs.parse(searchParams.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      titleText: text,
      page: 1,
    };

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url, {
      scroll: false,
    });
  };

  const debouncedOnSearch = debounce(onSearch, 1000);

  return (
    <div className="flex flex-row gap-3 items-center">
      <label>Search by title</label>
      <input
        className="p-2 px-4 border rounded-2xl"
        type="text"
        defaultValue={searchParams.get("titleText") || ""}
        onChange={(e) => debouncedOnSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchByTitle;
