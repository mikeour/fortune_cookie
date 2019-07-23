import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: ${props => (props.showFavesButton ? "relative" : "none")};
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

const FavesButton = ({ showFavesButton, updateFavorites, showFavorites }) => (
  <StyledButton showFavesButton={showFavesButton} onClick={updateFavorites}>
    {!showFavorites ? "See" : "Hide"} Everyones Faves!
  </StyledButton>
);

export default FavesButton;
