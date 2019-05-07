import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  display: ${props => (props.showNewMessageButton ? "relative" : "none")};
  font-size: 32px;
  justify-content: center;
  text-align: center;
  opacity: 0.6;
  transition: 0.3s;

  :hover {
    opacity: 1;
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
