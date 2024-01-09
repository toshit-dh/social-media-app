import React from "react";
import styled from "styled-components";
import ProfileLogo from "./Profile/ProfileLogo";
import ProfileInfo from "./Profile/ProfileInfo";
import ProfileStatus from "./Profile/ProfileStatus";
import ProfileButtons from "./Profile/ProfileButtons";
import Logout from "./Profile/Logout";
export default function Profile() {
  return <Container>
    <ProfileLogo/>
    <ProfileInfo/>
    <ProfileStatus/>
    <ProfileButtons/>
    <Logout/>
  </Container>;
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 5% 35% 10% 45% 5%;
  padding: 1.5rem 1.5rem 1.5rem 1.5rem;
  background-color: #282a34
`;
