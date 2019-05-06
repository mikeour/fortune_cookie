import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledButton = styled.button`
  display: ${props => (props.showEmailButton ? "relative" : "none")};
  margin-left: auto;
  margin-right: auto;
  font-size: 32px;
  justify-content: center;
  text-align: center;
`;

const StyledInput = styled.input`
  display: ${props => (props.showEmailButton ? "relative" : "none")};
  margin-left: auto;
  margin-right: auto;
  width: 300px;
`;

const EmailButton = props => {
  const { message, showEmailButton } = props;
  const [email, setEmail] = useState(null);

  const sendMail = msg => {
    axios.post("/email", { email, msg });
  };

  const handleChange = e => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  return (
    <React.Fragment>
      <StyledInput showEmailButton={showEmailButton} onChange={handleChange} />
      <StyledButton
        onClick={() => {
          sendMail(message);
        }}
        showEmailButton={showEmailButton}
      >
        Email me!
      </StyledButton>
    </React.Fragment>
  );
};

export default EmailButton;
