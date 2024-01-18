import React, { useState } from "react";
import styled from "styled-components";
import Feed from "../components/Feed";
import Account from "../components/Account";
export default function Home() {
  const [messages,setMessages] = useState(false)
  const [menu, setMenu] = useState("Profile");
  const changeMenu = (menu) => {
    setMenu(menu);
  };
  return (
    <Container messages={messages}>
      <Account setMessages={setMessages} changeMenu={changeMenu} menu={menu}/>
      <Feed changeMenu={changeMenu}/>
    </Container>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: ${(props)=>props.messages ? '30% 70%' : '20% 80%'};
  justify-content: center;
  align-items: center;
  background-color: #282a34;
  transition: grid-template-columns 0.5s ease-in-out;
`;
