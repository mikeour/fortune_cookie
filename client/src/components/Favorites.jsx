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

const Username = ({ name }) => <StyledName>{name}</StyledName>;

const UserMessage = ({ msg }) => <StyledMsg>{msg}</StyledMsg>;

const Favorites = ({ favorites, showFavorites }) => (
  <StyledDiv showFavorites={showFavorites}>
    <StyledUl>
      {showFavorites &&
        favorites.map((favorite, i) => {
          const { name, msg } = favorite;
          return (
            <StyledLi key={i}>
              <Username name={name} /> really enjoyed this advice:
              <UserMessage msg={msg} />.
            </StyledLi>
          );
        })}
    </StyledUl>
  </StyledDiv>
);

export default Favorites;
