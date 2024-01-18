import React, { useState, useRef } from "react";
import styled from "styled-components";
import { FaSearch as Search } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import Back from "./Back";

export default function ({ changeMenu, setMessages, inPosts }) {
  const [text, setText] = useState("");
  const arr = [1, 2, 3, 4.7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3];
  const ref = useRef();
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setStartX(e.pageX - ref.current.offsetLeft);
    setScrollLeft(ref.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!startX) return;
    const x = e.pageX - ref.current.offsetLeft;
    const walk = (x - startX) * 2;
    ref.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setStartX(0);
  };

  return (
    <Container style={{gridTemplateRows: `${!inPosts ? '5% 17% 3% 75%' : '5% 3% 92%'}`}}>
      <div className="top-bar">
        <div className="back">
          <Back changeMenu={changeMenu} inPosts={inPosts}/>
        </div>
        <div className="search">
          <Search className="icon" />
          <input
            type="text"
            placeholder="Search"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>
      {!inPosts && (
        <div
          className="notes"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          <div className="scroll" ref={ref}>
            {arr.map((_, index) => (
              <div key={index} className="note">
                <img src={Logo} alt={`note-${index}`} />
                <h4>{index}</h4>
              </div>
            ))}
          </div>
        </div>
      )}
      <h2>Messages</h2>
      <div className="users">
        {arr.map(() => (
          <div
            className="user"
            onClick={() => {
              changeMenu("Messages");
              setMessages(true);
            }}
          >
            <img src={Logo} alt="userphoto" />
            <div className="details">
              <h4>name</h4>
              <h4>latest message</h4>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  padding: 1rem;
  gap: 1rem;
  background-color: #282a34;
  .top-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1rem;
    .search {
      border-radius: 0.5rem;
      background-color: #373842;
      display: flex;
      flex-direction: row;
      justify-content: center;
      gap: 1rem;
      width: fit-content;
      input {
        outline: none;
        padding: 0.5rem;
        background-color: transparent;
        color: #7e7f89;
        border: none;
      }
      .icon {
        align-self: center;
        color: #595a63;
      }
    }
  }
  .notes {
    width: 100%;
    overflow: hidden;
    .scroll {
      max-width: 100%;
      padding: 1rem 0.2rem 0.2rem 0.2rem;
      display: flex;
      gap: 0.5rem;
      transition: 0.3s ease-in-out;
      overflow: auto;
      cursor: grab;
      &::-webkit-scrollbar {
        display: none;
      }
      .note {
        display: flex;
        flex-direction: column;
        align-items: center;
        h4 {
          color: white;
        }
        img {
          user-select: none;
          -webkit-user-drag: none;
          height: 5rem;
          width: 5rem;
          border-radius: 2.5rem;
          border: 0.1rem solid #4e0eff;
          margin-right: 0.5rem;
        }
      }
    }
  }
  h2 {
    height: fit-content;
    color: white;
  }
  .users {
    margin-bottom: 2.5rem;
    width: 100%;
    padding: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.2rem;
      &-thumb {
        background-color: #ffffff39;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .user {
      cursor: pointer;
      user-select: none;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      img {
        height: 5rem;
        width: 5rem;
        border-radius: 2.5rem;
        padding: 0%.1rem;
        border: 0.1rem solid #4e3eff;
      }
      .details {
        align-self: center;
        h4 {
          color: white;
        }
      }
    }
  }
`;
