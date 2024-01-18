import React, { useRef, useState } from "react";
import styled from "styled-components";
import Post from "./Post";
import Back from "../Account/Back";
export default function Posts({ inUser, changeMenu }) {
  const arr = [
    1, 9, 6, 7, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
  ];
  return (
    <Container>
      <div className="posts">
        {inUser && <Back changeMenu={changeMenu} />}
        <div className="post">
          {arr.map((_, index) => (
            <Post
              arr={arr}
              className="slider"
              changeMenu={changeMenu}
              key={index}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 1rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.2rem;
    height: 0.2rem;
    &-thumb {
      background-color: #ffffff39;
      width: 0.1rem;
      border-radius: 1rem;
    }
  }
  .posts {
    max-height: 100%;
    width: 100%;
    margin-bottom: 1rem;
    .post {
      background-color: #282a34;
      width: 100%;
      padding: 0.3rem ;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      border-radius: 0.5rem;
      overflow-y: auto;
      max-height: 30%;
    }
  }
`;
