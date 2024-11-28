import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserMediaCard({ userId }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-xs flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      <div className="flex gap-4 justify-between flex-wrap">
        <div className="relative w-1/5 h-24">
        <Image src="/like.png" alt="photos"/>
        </div>
      </div>
      </div>
  );
}
