import React from "react";
import PaginationButtons from "../PaginationButtons";
import getPosts from "@/app/_actions/getPosts";
import Card from "../Card";

interface Props {
  searchParams: URLSearchParams;
}

const PostList: React.FC<Props> = async ({ searchParams }) => {
  const { data, pagination } = await getPosts(searchParams);

  return (
    <>
      {data.length > 0 && <PaginationButtons pagination={pagination} />}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {!data.length && <p>No posts</p>}
        {data.map((item) => (
          <Card key={item.id} post={item} />
        ))}
      </div>
    </>
  );
};

export default PostList;
