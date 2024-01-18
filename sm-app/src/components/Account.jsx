import React, { useState } from "react";
import styled from "styled-components";
import Profile from "./Account/Profile";
import ProfileSearch from "./Account/ProfileSearch";
import ProfileDirect from "./Account/ProfileDirect";
import ProfileSettings from "./Account/ProfileSettings";
import Messages from "./Account/Messages";
import EditProfile from "./Account/EditProfile";
import UserPosts from "./Account/UserPosts";
export default function Account({ setMessages,changeMenu,menu}) {
  const user = {name:"Toshit",username:"toshit_dh",bio:"Bio is physics",accountType:"Private"}
  const [searchWhat, setSearchWhat] = useState("Users");
  switch (menu) {
    case "Search":
      return (
        <Container>
          <ProfileSearch changeMenu={changeMenu} searchWhat={searchWhat} setSearchWhat={setSearchWhat}/>
        </Container>
      );
    case "Direct":
      return (
        <Container>
          <ProfileDirect changeMenu={changeMenu} setMessages={setMessages}/>
        </Container>
      );
      case "Posts Direct":
      return (
        <Container>
          <ProfileDirect changeMenu={changeMenu} setMessages={setMessages} inPosts={true}/>
        </Container>
      );
    case "Settings":
      return (
        <Container>
          <ProfileSettings changeMenu={changeMenu} />
        </Container>
      );
    case "Profile":
      return (
        <Container>
          <Profile changeMenu={changeMenu} setSearchWhat={setSearchWhat} />
        </Container>
      );
    case "Messages":
      return (
        <Container>
          <Messages changeMenu={changeMenu} setMessages={setMessages} />
        </Container>
      );
    case "Edit Profile":
      return (
        <Container>
          <EditProfile changeMenu={changeMenu} user={user}/>
        </Container>
      );
     case "Posts":
      return(
        <Container>
          <UserPosts changeMenu={changeMenu}/>
        </Container>
      )
  }
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #282a34;
`;
