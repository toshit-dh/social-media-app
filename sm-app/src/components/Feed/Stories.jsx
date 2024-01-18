import React, { useState, useRef } from "react";
import styled from "styled-components";
import Logo from "../../assets/logo.png";
import { AiOutlineClose as Left } from "react-icons/ai";

export default function Stories({
  setStoryDetails,
  inStoryDetail,
  onStoryClick,
  storySelected,
  setStorySelected
}) {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,
    3, 3,
  ];

  const ref = useRef();
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [scrollTop, setScrollTop] = useState(0);

  const handleMouseDown = (e) => {
    if (inStoryDetail) {
      setStartY(e.pageY - ref.current.offsetTop);
      setScrollTop(ref.current.scrollTop);
    } else {
      setStartX(e.pageX - ref.current.offsetLeft);
      setScrollLeft(ref.current.scrollLeft);
    }
  };

  const handleMouseMove = (e) => {
    if (!startX && !startY) return;

    if (inStoryDetail) {
      const y = e.pageY - ref.current.offsetTop;
      const walkY = (y - startY) * 2;
      ref.current.scrollTop = scrollTop - walkY;
    } else {
      const x = e.pageX - ref.current.offsetLeft;
      const walkX = (x - startX) * 2;
      ref.current.scrollLeft = scrollLeft - walkX;
    }
  };

  const handleMouseUp = () => {
    setStartX(0);
    setStartY(0);
  };

  return (
    <Container>
      <div
        className="stories"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="scroll"
          ref={ref}
          style={{
            flexDirection: `${inStoryDetail ? "column" : "row"}`,
            overflowY: `${inStoryDetail ? "auto" : "hidden"}`,
            overflowX: `${inStoryDetail ? 'hidden' : "auto"}`,
            maxHeight: `${inStoryDetail ? "99vh" : "auto"}`,
            maxWidth: `${inStoryDetail ? "auto" : "100%"}`
          }}
        >
          {arr.map((_, index) => (
            <div
              key={index}
              className={`story ${index === storySelected ? "selected" : ""}`}
            >
              {index === storySelected && inStoryDetail && (
                <div className="back">
                  <Button onClick={() => setStoryDetails(false)}>
                    <Left size="15" />
                  </Button>
                </div>
              )}
              <img
                src={Logo}
                alt={`story-${index}`}
                key={index}
                onClick={() => {
                  if(inStoryDetail){
                    setStorySelected(index)
                  }
                  else{
                  onStoryClick(index)
                  }
                }}
              />
              <h4>{index}</h4>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem 0 0 2rem;
  .stories {
    padding: 1rem;
    width: 100%;
    h2 {
      color: white;
    }
    .scroll {
      padding: 0rem 0.2rem 0.2rem 0.2rem;
      width: fit-content;
      display: flex;
      align-items: start;
      gap: 0.5rem;
      transition: 0.3s ease-in-out;
      overflow: hidden;
      cursor: grab;
      &::-webkit-scrollbar {
        display: none;
      }
      .story {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;

        .back {
          cursor: pointer;
          position: absolute;
          top: 0;
          right: 0;
        }

        h4 {
          color: white;
        }

        img {
          cursor: pointer;
          user-select: none;
          -webkit-user-drag: none;
          height: 5rem;
          width: 5rem;
          border-radius: 2.5rem;
          border: 0.1rem solid #4e0eff;
          margin-right: 0.5rem;
        }
      }

      .selected {
        img {
          cursor: pointer;
          user-select: none;
          -webkit-user-drag: none;
          height: 5rem;
          width: 5rem;
          border-radius: 2.5rem;
          border: 0.1rem solid red;
          margin-right: 0.5rem;
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
