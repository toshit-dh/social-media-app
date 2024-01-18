import React, { useState } from "react";
import styled from "styled-components";
import SearchBar from "./Feed/SearchBar";
import Stories from "./Feed/Stories";
import StoryDetails from "./Feed/StoryDetails";
import Posts from "./Feed/Posts";
import Challenge from "./Feed/Challenge";
export default function Feed({ changeMenu }) {
  const [storyDetails, setStoryDetails] = useState(false);
  const [storySelected, setStorySelected] = useState(null);
  const onStoryClick = (index) => {
    setStoryDetails(true);
    setStorySelected(index);
  };
  return (
    <>
      {storyDetails ? (
        <>
          <Container>
            <Stories
              setStoryDetails={setStoryDetails}
              inStoryDetail={true}
              storySelected={storySelected}
              setStorySelected={setStorySelected}
            />
            <StoryDetails setStoryDetails={setStoryDetails} />
          </Container>
        </>
      ) : (
        <>
          <Container2>
            <div className="stories">
              <Stories
                setStoryDetails={setStoryDetails}
                inStoryDetail={false}
                onStoryClick={onStoryClick}
              />
            </div>
            <div className="challenges">
              <Posts changeMenu={changeMenu} />
              <Challenge />
            </div>
          </Container2>
        </>
      )}
    </>
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: #3c3f51;
  border-radius: 3rem;
`;
const Container2 = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 20% 80%;
  background-color: #3c3f51;
  border-radius: 1rem;
  .stories{
    overflow: hidden;
  }
  .challenges {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 50% 50%;
  }
`;
