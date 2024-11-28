import Image from "next/image";
import React from "react";

export default function Advertisements({ size }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-sm">
      <div className="flex items-center justify-between text-gray-500 font-medium">
        <span>Sponsored Ads</span>
        <Image src="/more.png" alt="more" width={16} height={16} />
      </div>
      <div className={`flex flex-col mt-4 ${size == "sm" ? "gap-2" : "gap-4"}`}>
        <div
          className={`relative w-full ${
            size == "sm" ? "h-24" : size == "md" ? "h36" : "h-48"
          }`}
        >
          <Image
            src="/like.png"
            alt="picture"
            fill
            className="rounded-lg object-cover"
          />
        </div>
        <div className="flex items-center gap-4">
          <Image
            src="/like.png"
            alt="picture"
            width={24}
            height={24}
            className="rounded-full object-cover w-6 h-6"
          />
          <span className="text-blue-500 font-medium">Toshit Hole</span>
          <p className={`${size == "sm" ? "text-xs" : "text-sm"}`}>
            {
              size == "sm" ? "Lorem ipsum dolor, sit amet consectetur adipisicing elit." :
              size == "md" ? "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit laboriosam vero doloribus sunt beatae neque rem autem.":
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque possimus, facere recusandae ab, rerum modi libero quidem, earum neque aut iure dolorem aliquid doloribus perspiciatis vero voluptate laudantium accusamus qui."
            }
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum
            saepe maiores placeat adipisci quis beatae, necessitatibus earum,
            ipsam distinctio quae, voluptates illum? Corrupti libero suscipit
            quam natus qui soluta aut!
          </p>
          <button className="bg-gray-200 text-gray-500 p-2 text-xs rounded-l">Learn More</button>
        </div>
      </div>
    </div>
  );
}
