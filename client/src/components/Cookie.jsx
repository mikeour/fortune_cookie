import React from "react";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: ${props => (props.displayProp ? "relative" : "none")};
  animation: ${rotate} 10s linear infinite;
  padding: 2rem 1rem;
  margin: 150px auto;
  width: 50%;
`;

const Image = styled.img`
  display: ${props => (props.displayProp ? "relative" : "none")};
  margin: auto;
  width: 50%;

  :hover {
    cursor: pointer;
  }
`;

const Cookie = props => {
  const { updateCookie, showCookie } = props;
  return (
    <Rotate displayProp={showCookie}>
      <Image
        onClick={updateCookie}
        displayProp={showCookie}
        src={window.location.origin + "/assets/cookie2.png"}
      />
    </Rotate>
  );
};

export default Cookie;
