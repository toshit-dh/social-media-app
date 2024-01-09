import React, { useState } from "react";
import styled from "styled-components";
import AuthSide from "../components/AuthSide";
import Register from "../components/Register";
import Login from "../components/Login";
export default function Auth() {
const [auth,setAuth] = useState('Register')
const changeAuth = (auth)=>{
    setAuth(auth)
}
  return (
    <Container>
      <AuthSide />
      {
        auth === "Register" ? <Register changeAuth={changeAuth}/> : <Login changeAuth={changeAuth}/> 
      }
      <Register />
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 50% 50%;
  justify-content: center;
  align-items: center;
  background-color: #282a34;
`;
