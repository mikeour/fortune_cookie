import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  display: ${props => (props.showMessage ? "block" : "none")}
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  font-size: 50px;
  text-align: center;
`;

const Message = props => {
  const { showMessage, message } = props;
  return <StyledP showMessage={showMessage}>{message}</StyledP>;
};

export default Message;
