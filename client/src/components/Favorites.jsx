import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: ${props => (props.showFavorites ? "inline-block" : "none")};
  position: relative;
  margin: auto;
  top: 175px;
  background-color: white;
  border: 1px solid black;
  padding: 15px;
  text-align: center;
`;

const StyledUl = styled.ul`
  display: block;
`;

const StyledLi = styled.li`
  font-family: "Roboto", sans-serif;
  border: 1px dotted black;
  border-radius: 6px;
  padding: 10px;
  margin: 5px;
  display: inline-block;
`;

const StyledName = styled.p`
  font-size: 20px;
`;

const StyledMsg = styled.p`
  padding: 5px;
  border: 1px dotted black;
  font-size: 15px;
`;

const Name = props => {
  return <StyledName>{props.name}</StyledName>;
};

const Msg = props => {
  return <StyledMsg>{props.msg}</StyledMsg>;
};

const Favorites = props => {
  const { favorites, showFavorites } = props;
  return (
    <StyledDiv showFavorites={showFavorites}>
      <StyledUl>
        {showFavorites &&
          favorites.map((favorite, i) => {
            const { name, msg } = favorite;
            return (
              <StyledLi key={i}>
                <Name name={name} /> really enjoyed this advice:
                <Msg msg={msg} />.
              </StyledLi>
            );
          })}
      </StyledUl>
    </StyledDiv>
  );
};

export default Favorites;
