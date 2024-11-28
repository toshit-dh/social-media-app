import React from "react";
import ProfileCard from "./ProfileCard";
import Link from "next/link";
import Image from "next/image";
import Advertisements from "./Advertisements";

export default function LeftMenu({ page }) {
  const links = [
    { text: "My Posts", link: "/", image: "posts" },
    { text: "Activity", link: "/", image: "activity" },
    { text: "Marketplace", link: "/", image: "market" },
    { text: "Events", link: "/", image: "events" },
    { text: "Albums", link: "/", image: "albums" },
    { text: "Videos", link: "/", image: "videos" },
    { text: "News", link: "/", image: "news" },
    { text: "Courses", link: "/", image: "courses" },
    { text: "Lists", link: "/", image: "lists" },
    { text: "Settings", link: "/", image: "settings" },
  ];
  return (
    <div className="flex flex-col gap-6">
      {page && <ProfileCard />}
      <div className="p-4 bg-white rounded-lg shadow-md text-gray-500 text-sm flex flex-col gap-2">
        {links.map(({text,link,image},i) => (
          <div key={i}>
            <Link
              href={link}
              className="flex i-c gap-4 p-2 rounded-lg hover:bg-slate-100"
            >
              <Image src={`/${image}.png`} alt="myposts" width={20} height={20} />
              <span>{text}</span>
            </Link>
            <hr className="border-t-1 border-gray-50 w-36 snap-center" />
          </div>
        ))}
      </div>
      <Advertisements size="sm"/>
    </div>
  );
}
