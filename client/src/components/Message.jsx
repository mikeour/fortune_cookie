import React, { Fragment } from "react";
import styled from "styled-components";

const StyledP = styled.p`
  display: ${props => (props.showMessage ? "relative" : "none")}
  width: 65%;
  background-color: white;
  margin: 100px auto;
  padding: 25px;
  font-size: 50px;
  text-align: center;
  justify-content: center;
  vertical-align: center;
  border: 1px solid black;
  border-radius: 15px;
  font-family: 'Roboto', sans-serif;
`;

const StyledImage = styled.img`
  display: ${props => (props.showMessage ? "relative" : "none")};
`;

const Message = props => {
  const { showMessage, message } = props;
  return (
    <Fragment>
      <StyledImage src={window.location.origin + "/assets/open_cookie.png"} />
      <StyledP showMessage={showMessage}>{message}</StyledP>
    </Fragment>
  );
};

export default Message;
