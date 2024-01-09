import React from "react";
import styled from "styled-components";
import Logo from '../../assets/logo.png'
export default function ProfileInfo() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <h3>Toshit</h3>
      <h4>toshit_dh</h4>
    </Container>
  );
}
const Container = styled.div`
padding: 0.5rem;
  gap: 0.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img{
    padding: 0.5rem;
    height: 150px;
    width: 150px;
    border-radius: 75px;
    border: 0.1rem solid #4e0eff;
  }
  h3,h4{
    color: white;
  }
`;
