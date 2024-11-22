"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div className="">
        <div
          className="flex flex-col gap-[4.5px] cursor-pointer"
          onClick={() => setIsOpen((e) => !e)}
        >
          <div className="w-6 h-1 bg-orange-500 rounded-sm" />
          <div className="w-6 h-1 bg-orange-500 rounded-sm" />
          <div className="w-6 h-1 bg-orange-500 rounded-sm" />
        </div>
        {isOpen && (
          <div className="absolute left-0 top-24 w-full h-[calc(100vh - 96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
            <Link href="/">Home</Link>
            <Link href="/">Friends</Link>
            <Link href="/">Groups</Link>
            <Link href="/">Stories</Link>
            <Link href="/">Login</Link>
          </div>
        )}
      </div>
    </div>
  );
}
