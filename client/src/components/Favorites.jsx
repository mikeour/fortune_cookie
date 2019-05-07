import React from "react";
import styled from "styled-components";

const StyledUl = styled.ul`
  display: block;
`;

const StyledLi = styled.li``;

const Favorites = props => {
  const { favorites, showFavorites } = props;
  return (
    <StyledUl>
      {showFavorites &&
        favorites.map((favorite, i) => {
          const { name, msg } = favorite;
          return (
            <StyledLi key={i}>
              {name} loved {msg}
            </StyledLi>
          );
        })}
    </StyledUl>
  );
};

export default Favorites;
