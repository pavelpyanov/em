import { Suspense } from "react";
import SearchByTitle from "./_components/SearchByTitle";
import PostList from "./_components/PostList";
import PostsSceleton from "./_components/PostList/PostListSceleton";
import CategoriesList from "./_components/CategoriesList";

export const revalidate = 0; // seconds

interface Props {
  searchParams: URLSearchParams;
}

const Home: React.FC<Props> = ({ searchParams }) => {
  const params = new URLSearchParams(searchParams);

  return (
    <main className="flex flex-col gap-5">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl text-center font-bold">From the blog</h1>
        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          hic commodi voluptatibus quos? Magni facilis placeat vel voluptatum
          autem consectetur.
        </p>
        <div className="flex flex-col gap-4">
          <CategoriesList />
          <SearchByTitle />
          <Suspense key={params.toString()} fallback={<PostsSceleton />}>
            <PostList searchParams={searchParams} />
          </Suspense>
        </div>
      </div>
    </main>
  );
};

export default Home;
