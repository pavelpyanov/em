"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import qs from "query-string";
import { Pagination } from "../types/pagination";

interface Props {
  pagination: Pagination;
}

const PaginationButtons: React.FC<Props> = ({ pagination }) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onChangePage = (pageNum: number | null) => {
    let currentQuery = {};

    if (searchParams) {
      currentQuery = qs.parse(searchParams.toString());
    }

    if (!pageNum) {
      return;
    }

    const updatedQuery: any = {
      ...currentQuery,
      page: pageNum,
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

  return (
    <div className="flex flex-row gap-3">
      <button
        className="p-2 border rounded-xl bg-green-400 disabled:bg-gray-200 disabled:text-gray-400"
        disabled={!pagination.prevPage}
        onClick={() => onChangePage(pagination.prevPage)}
      >
        Prev
      </button>
      <button
        className="p-2 border rounded-xl bg-green-400 disabled:bg-gray-200 disabled:text-gray-400"
        disabled={!pagination.nextPage}
        onClick={() => onChangePage(pagination.nextPage)}
      >
        Next
      </button>
    </div>
  );
};

export default PaginationButtons;
