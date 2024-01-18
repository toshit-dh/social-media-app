import React from "react";
import styled from "styled-components";

export default function AuthSide() {
  return <Container>
    <div className="side">
        hi
    </div>
  </Container>;
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #282a34;
  .side{
    border: 0.2rem solid #4e0eff;
  }
`;
