import React from "react";
import styled from "styled-components";

const StyledP = styled.p`
  display: ${props => (props.showMessage ? "relative" : "none")}
  margin-left: auto;
  margin-right: auto;
  font-size: 50px;
  text-align: center;
  border: 1px solid green;
`;

const Message = props => {
  return <StyledP showMessage={props.showMessage}>{props.message}</StyledP>;
};

export default Message;
