import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
export default function ProfileLogo() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <h2>Echos</h2>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  gap: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
  }
  h2 {
    color: white;
  }
`;
