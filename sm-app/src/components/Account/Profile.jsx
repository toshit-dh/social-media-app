import React from "react";
import styled from "styled-components";
import ProfileLogo from "../Profile/ProfileLogo";
import ProfileInfo from "../Profile/ProfileInfo";
import ProfileStatus from "../Profile/ProfileStatus";
import ProfileButtons from "../Profile/ProfileButtons";
import Logout from "../Profile/Logout";
export default function Profile({changeMenu,setSearchWhat}) {
  return <Container>
    <ProfileLogo/>
    <ProfileInfo changeMenu={changeMenu}/>
    <ProfileStatus changeMenu={changeMenu} setSearchWhat={setSearchWhat}/>
    <ProfileButtons changeMenu={changeMenu} setSearchWhat={setSearchWhat}/>
    <Logout/>
  </Container>;
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 5% 35% 10% 40% 10%;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  background-color: #282a34;
`;
