import React from "react";
import axios from "axios";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: ${props => (props.showEmailButton ? "relative" : "none")};
  font-size: 32px;
  border: 1px solid magenta;
  text-align: center;
`;

const EmailButton = props => {
  const sendMail = msg => {
    axios.post("/email", { data: msg });
  };

  return (
    <React.Fragment>
      <StyledDiv
        onClick={() => {
          sendMail(props.message);
        }}
        showEmailButton={props.showEmailButton}
      >
        EmailButton!
      </StyledDiv>
    </React.Fragment>
  );
};

export default EmailButton;
