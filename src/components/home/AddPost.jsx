import Image from "next/image";
import React from "react";

export default function AddPost() {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg gap-4 flex justify-between text-sm">
      <Image
        src="/login.png"
        alt="username"
        className="w-12 h-12 object-cover rounded-full"
        width={48}
        height={48}
      />
      <div className="flex-1">
        <div className="flex gap-4">
          <textarea placeholder="Whats in your mind?" className="bg-slate-100 rounded-lg p-2" name="" id=""></textarea>
          <Image
            src="/emoji.png"
            alt=""
            className="w-5 h-5 cursor-pointer self-end"
            width={20}
            height={20}
          />
        </div>
        <div className="flex items-center gap-4 mt-4 text-gray-400 flex-wrap">
          <div className="flex gap-2 items-center cursor-pointer">
            <Image src="/addimage.png" alt="" width={20} height={20}/>
            Photo
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image src="/addVideo.png" alt="" width={20} height={20}/>
            Video
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image src="/addEvent.png" alt="" width={20} height={20}/>
            Event
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <Image src="/poll.png" alt="" width={20} height={20}/>
            Poll
          </div>
        </div>
      </div>
    </div>
  );
}
