import React from "react";
import FriendRequest from "./FriendRequest";
import Birthdays from "./Birthdays";
import Advertisements from "./Advertisements";
import UserInfoCard from "../profile/UserInfoCard";
import UserMediaCard from "../profile/UserMediaCard";

export default function RightMenu({ userId }) {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId={userId}/>
          <UserMediaCard userId={userId}/>
        </>
      ) : null}
      <FriendRequest />
      <Birthdays />
      <Advertisements />
    </div>
  );
}
