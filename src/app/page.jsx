import AddPost from "@/components/home/AddPost";
import Feed from "@/components/home/Feed";
import LeftMenu from "@/components/home/LeftMenu";
import RightMenu from "@/components/home/RightMenu";
import Stories from "@/components/home/Stories";
import React from "react";

export default function Home() {
  return (
    <div className="flex gap-6 p-6">
        <div className="hidden xl:block w-[20%]">
          <LeftMenu page="home"/>
        </div>
        <div className="w-full lg:w-[70%] xl:w-[50%]">
          <div className="flex flex-col gap-6">
            <Stories />
            <AddPost />
            <Feed />
          </div>
        </div>
        <div className="hidden lg:block w-[30%]">
          <RightMenu />
        </div>
      </div>
  );
}
