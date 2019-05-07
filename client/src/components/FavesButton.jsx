import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: ${props => (props.showFavesButton ? "relative" : "none")};
  font-size: 32px;
  justify-content: center;
  text-align: center;
  opacity: 0.6;
  transition: 0.3s;

  :hover {
    opacity: 1;
  }
`;

const FavesButton = props => {
  const { showFavesButton, updateFavorites } = props;

  return (
    <StyledButton showFavesButton={showFavesButton} onClick={updateFavorites}>
      Show Faves!
    </StyledButton>
  );
};

export default FavesButton;
