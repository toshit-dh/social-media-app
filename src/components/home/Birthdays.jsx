import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Birthdays() {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md text-xs flex flex-col gap-4">
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="/like.png"
            alt="userimage"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">Toshit Hole</span>
        </div>
        <div className="flex gap-3 justify-end">
          <button className="bg-blue-500 text-white text-sm px-2 py-1 rounded-md">
            Cekebrate
          </button>
        </div>
      </div>
      <div className="p-4 bg-slate-100 flex items-center gap-4">
        <Image src="/gift.png" alt="gift" width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
        <span className="text-gray-700 font-semibold">Upcoming Birthdays</span>
        <span className="text-gray-500">See other 16 upcoming birthdays</span>
        </Link>
      </div>
    </div>
  );
}
