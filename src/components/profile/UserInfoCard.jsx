import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function UserInfoCard({ userId }) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-xs flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">User Info</span>
        <Link href="/" className="text-blue-500 text-xs">
          See All
        </Link>
      </div>
      <div className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <span className="text-xl text-black">Toshhit Hole</span>
          <span className="text-sm">@toshithole</span>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur 
          </p>
          <div className="flex items-center gap-2">
            <Image src="/map.png" width={16} height={16}/>
            <span>Living in <b>Downtowm</b></span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/school.png" width={16} height={16}/>
            <span>Went to <b>Lodha World School</b></span>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/work.png" width={16} height={16}/>
            <span>Worrks at <b>Apple Inc.</b></span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex gap-1 items-center">
              <Image src="/link.png" alt="link" width={16} height={16}/>
              <Link href="/">toshit.tech</Link>
            </div>
            <div className="flex gap-1 items-center">
              <Image src="/date.png" alt="link" width={16} height={16}/>
              <span>Joined July 2020</span>
            </div>
          </div>
          <button className="bg-blue-500 text-white text-sm rounded-md p-2">Follow</button>
          <span className="text-red-500 self-end text-xs cursor-pointer">Block User</span>
        </div>
    </div>
  )
}