import React from "react";
import styled from "styled-components";
import Profile from "../components/Profile";
import Feed from "../components/Feed";
export default function Home() {
  return (
    <Container>
      <Profile />
      <Feed />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 20% 80%;
  justify-content: center;
  align-items: center;
  background-color: #131324;
`;
