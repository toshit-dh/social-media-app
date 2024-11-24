import Image from "next/image";
import React from "react";

export default function Comments() {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image
          src="/albums.png"
          alt="userimage"
          width={32}
          height={32}
          className="w-8 h-8 rounded-full"
        />
        <div className="flex flex-1 items-center justify-between w-full bg-slate-100 rounded-xl px-6 py-2 text-sm">
          <input
            type="text"
            placeholder="Wwrite a comment..."
            className="bg-transparent outline-none"
          />
          <Image
            src="/emoji.png"
            alt="userimage"
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="">
        <div className="flex gap-4 justify-between mt-6">
          <Image
            src="/albums.png"
            alt="userimage"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col gap-2 flex-1">
            <span className="font-medium">Toshit</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              debitis consequuntur totam impedit, aspernatur dicta rerum dolor
              nemo eius libero adipisci possimus et ipsa dolores quisquam
              dolorum iusto, ipsum cum?
            </p>
            <div className="flex items-center gap-8 text-xs text-gray-500 mt-2">
              <div className="flex items-center gap-4">
                <Image
                  src="/like.png"
                  alt="userimage"
                  width={12}
                  height={12}
                  className="w-4 h-4 rounded-full"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500"> Likes</span>
              </div>
              <div className="">
                Reply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
