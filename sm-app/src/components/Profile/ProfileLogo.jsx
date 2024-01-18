import React from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
export default function ProfileLogo() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <h2>
        <span className="e">E</span>
        <span className="c">c</span>
        <span className="h">h</span>
        <span className="o">o</span>
        <span className="s">s</span>
      </h2>
    </Container>
  );
}
const Container = styled.div`
user-select: none;
  width: 100%;
  gap: 3rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    height: 3rem;
  }
  h2 {
    span{
      text-decoration: underline;
    }
    .e{
      color: yellow;
    }
    .c{
      color: red;
    }
    .h{
      color: green;
    }
    .o{
      color: blue;
    }
    .s{
      color: orange;
    }
  }
`;
