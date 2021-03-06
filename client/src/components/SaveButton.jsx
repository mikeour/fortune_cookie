import React, { Fragment, useState } from "react";
import axios from "axios";
import FavesButton from "./FavesButton.jsx";
import styled from "styled-components";

const StyledButton = styled.button`
  display: ${props => (props.showSaveButton ? "inline-block" : "none")};
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  justify-content: center;
  text-align: center;
  opacity: 0.6;
  transition: 0.3s;
  border-radius: 6px;
  padding: 5px;
  font-family: "Roboto", sans-serif;

  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  display: ${props => (props.showSaveButton ? "block" : "none")};
  margin: 0 auto 10px auto;
  width: 90%;
`;

const FlexDiv = styled.div`
  display: flex;
`;

const SaveButton = ({
  showSaveButton,
  showFavorites,
  showFavesButton,
  updateFavorites,
  message
}) => {
  const [name, setName] = useState(null);

  const saveToDatabase = msg => {
    axios.post("/save", { name, msg });
  };

  const handleChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <Fragment>
      <StyledInput
        placeholder="Enter your name..."
        showSaveButton={showSaveButton}
        onChange={handleChange}
      />
      <FlexDiv>
        <StyledButton
          showSaveButton={showSaveButton}
          onClick={() => {
            saveToDatabase(message);
          }}
        >
          Save!
        </StyledButton>
        <FavesButton
          showFavorites={showFavorites}
          showFavesButton={showFavesButton}
          updateFavorites={updateFavorites}
        />
      </FlexDiv>
    </Fragment>
  );
};

export default SaveButton;
