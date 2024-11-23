import Image from "next/image";
import React from "react";
import Comments from "./Comments";

export default function Post() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/more.png"
            alt="userimage"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <span className="font-medium">Toshit</span>
        </div>
        <Image src="/more.png" alt="more" width={16} height={16} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="w-full min-96 relative">
          <Image src="/messages.png" alt="more" fill className="object-cover" />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          itaque aut architecto expedita aliquam, at voluptates voluptatem
          deserunt quibusdam minus tempore aliquid, dignissimos odio corrupti
          amet cumque ducimus facere iusto?
        </p>
      </div>
      <div className="flex items-center justify-between text-sm  my-4">
        <div className="flex gap-8">
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/like.png"
              alt="like"
              className="cursor-pointer"
              width={16}
              height={16}
            />
            <span className="text-gray-300"></span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/comment.png"
              alt="comment"
              className="cursor-pointer"
              width={16}
              height={16}
            />
            <span className="text-gray-300"></span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div className="">
        <div className="flex items-center gap-4 bg-slate-50 p-2 rounded-xl">
            <Image
              src="/share.png"
              alt="share"
              className="cursor-pointer"
              width={16}
              height={16}
            />
            <span className="text-gray-300"></span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Share</span>
            </span>
          </div>
        </div>
      </div>
      <Comments/>
    </div>
  );
}
