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
  display: inline-block;
  animation: ${rotate} 4s linear infinite;
  padding: 2rem 1rem;
`;

const Image = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 35%;

  :hover {
    border: 1px solid red;
  }
`;

const Cookie = () => {
  return (
    <Rotate>
      <Image src={window.location.origin + "/assets/cookie.png"} />
    </Rotate>
  );
};

export default Cookie;
