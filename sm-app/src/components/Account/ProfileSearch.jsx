import React, { useState } from "react";
import styled from "styled-components";
import { FaSearch as Search } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import Back from "./Back";
export default function ProfileSearch({
  changeMenu,
  searchWhat,
  setSearchWhat,
  inShare,
}) {
  const [text, setText] = useState("");
  const arr = [
    1, 2, 3, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1,
  ];
  return (
    <Container>
      <div className="top-bar">
        {!inShare && (
          <div className="back">
            <Back changeMenu={changeMenu} setSearchWhat={setSearchWhat} />
          </div>
        )}
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
      <div className="users">
        {arr.map(() => (
          <div className="user">
            <img
              src={Logo}
              alt="userphoto"
              style={{
                height: `${inShare ? "2.2rem" : "5rem"}`,
                width: `${inShare ? "2.2rem" : "5rem"}`,
                borderRadius: `${inShare ? "1.1rem" : "2.5rem"}`,
              }}
            />
            <div className="details">
              {searchWhat === "Users" ? (
                <>
                  <h4>username</h4>
                  <h4>name</h4>{
                    false && <h4>Followed by </h4>
                  }
                </>
              ) : (
                <>
                  <h4>username</h4>
                  <h4>name</h4>
                </>
              )}
            </div>
            {searchWhat != "Users" && (
              <div className="action">
                {searchWhat === "Followers" ? (
                  <h4>Remove</h4>
                ) : (
                  <h4>Following</h4>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Container>
  );
}
const Container = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-rows: 5% 95%;
  padding: 1rem;
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
  .users {
    width: 100%;
    height: 100%;
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
      user-select: none;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      img {
        padding: 0.1rem;
        border: 0.1rem solid #4e3eff;
      }
      .details {
        align-self: center;
        h4 {
          color: white;
        }
      }
      .action {
        cursor: pointer;
        padding: 0.5rem;
        align-self: center;
        height: fit-content;
        border-radius: 0.5rem;
        background-color: #3c3f51;
        h4 {
          color: white;
        }
      }
    }
  }
`;
