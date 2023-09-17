import React from "react";
import Image from "next/image";
import { PostWithCategories } from "../../types/post";

interface Props {
  post: PostWithCategories;
}

const Card: React.FC<Props> = ({ post }) => {
  return (
    <div className="flex flex-col rounded-xl shadow-md h-[400px] overflow-hidden hover:-translate-y-2 transition">
      <div className="h-1/3 w-full overflow-hidden rounded-t-xl relative">
        <Image
          src={post.imageUrl}
          alt={post.title}
          style={{ objectFit: "cover", borderTopLeftRadius: "inherit" }}
          fill
        />
      </div>
      <div className="p-4 flex flex-col gap-5">
        <span className="block text-purple-600">
          {post.categories.map((i) => i.name).join(" ")}
        </span>
        <h3 className="font-semibold">{post.title}</h3>
        <p className="text-gray-500">{post.excerpt}</p>
      </div>
    </div>
  );
};

export default Card;
