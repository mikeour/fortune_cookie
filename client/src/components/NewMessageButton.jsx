import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: ${props => (props.showNewMessageButton ? "relative" : "none")};
  font-size: 20px;
  width: 40%;
  height: 80%;
  background-color: white;
  justify-content: center;
  text-align: center;
  border: 1px solid black;
  border-radius: 6px;
  font-family: "Roboto", sans-serif;
  padding: 15px;

  :hover {
    cursor: pointer;
  }

  :active {
    transform: translateY(4px);
  }
`;

const NewMessageButton = props => {
  const { getRandomMessage, showNewMessageButton } = props;
  return (
    <StyledButton
      onClick={getRandomMessage}
      showNewMessageButton={showNewMessageButton}
    >
      New Message!
    </StyledButton>
  );
};

export default NewMessageButton;
