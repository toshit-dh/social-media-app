import React, { useRef, useState } from "react";
import styled from "styled-components";
import App from "../../assets/logo.png";
import Logo from "../../assets/download.jpeg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  FaHeart as Like,
  FaComment as Comment,
  FaShare as Share,
} from "react-icons/fa";
import Dialog from "./Dialog";
export default function Post() {
  const [modalOpen, setModalOpen] = useState([false, ""]);
  const [selectedButton, setSelectedButton] = useState("");
  const arr = [1, 1, 1, 17];
  const handleCloseModal = () => {
    setModalOpen([false, ""]);
  };
  return (
    <Container>
      <div className="body">
        <div className="side1">
          <div className="top">
            <div className="detail">
              <img src={App} alt="" />
              <h3>username</h3>
            </div>
            <div className="side2">
              <div className="buttons">
                <div className="like btn">
                  <Button
                    onClick={() => {
                      setSelectedButton("Like");
                    }}
                  >
                    <Like
                      className="icon"
                      size="25"
                      style={{
                        color: `${selectedButton === "Like" ? "red" : "white"}`,
                      }}
                    />
                  </Button>
                  <h6 onClick={() => setModalOpen([true, "Likes"])}>196</h6>
                </div>
                <div
                  className="comment btn"
                  onClick={() => {
                    setSelectedButton("Comment")
                    setModalOpen([true, "Comments"]);
                  }}
                >
                  <Button>
                    <Comment
                      className="icon"
                      size="25"
                      style={{
                        color: `${
                          selectedButton === "Comment" ? "red" : "white"
                        }`,
                      }}
                    />
                  </Button>
                  <h6>567</h6>
                </div>
                <div
                  className="share btn"
                  onClick={() => {
                    setSelectedButton("Share");
                    setModalOpen([true, "Shares"]);
                  }}
                >
                  <Button>
                    <Share
                      className="icon"
                      size="25"
                      style={{
                        color: `${
                          selectedButton === "Share" ? "red" : "white"
                        }`,
                      }}
                    />
                  </Button>
                  <h6>89</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="image">
            <Carousel className="slider">
              {arr.map((_, index) => (
                <>
                  <img src={Logo} alt="" key={index} />
                </>
              ))}
            </Carousel>
            {modalOpen && (
              <Dialog
                modalOpen={modalOpen[0]}
                close={handleCloseModal}
                modalType={modalOpen[1]}
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  height: 100%;
  user-select: none;
  .body {
    height: 100%;
    width: 100%;
    background-color: #3c3f51;
    border-radius: 0.5rem;
    border: 0.1rem solid #4e3eff;
    .side1 {
      display: flex;
      flex-direction: column;
      border-right: 0.1rem solid #4e3eff;
      .top {
        display: flex;
        justify-content: space-between;
        border-bottom: 0.1rem solid #4e3eff;
        .detail {
          display: flex;
          flex-direction: row;
          gap: 1rem;
          h3 {
            color: white;
            align-self: center;
          }
          img {
            align-self: center;
            margin: 0.3rem;
            height: 3rem;
            width: 3rem;
            border-radius: 1.5rem;
            padding: 0.1rem;
            border: 0.1rem solid #4e3eff;
          }
        }
        .side2 {
          align-self: center;
          padding: 0.2rem;
          .buttons {
            display: flex;
            gap: 2rem;
            align-items: center;
            justify-content: center;
            .btn {
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 0.4rem;
              h6 {
                color: white;
              }
            }
          }
        }
      }
      .image {
        .carousel-root {
          .carousel {
            width: fit-content;
            .thumbs-wrapper {
              display: none;
            }
          }
        }
        .slider {
          width: 100%;
          img {
            object-fit: fill;
            border-bottom-left-radius: 0.5rem;
            width: 100%;
          }
        }
      }
    }
  }
`;
const Button = styled.button`
  border: none;
  color: white;
  background-color: transparent;
`;
