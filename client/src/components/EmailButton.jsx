import React, { Fragment, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledButton = styled.button`
  display: ${props => (props.showEmailButton ? "block" : "none")};
  margin-left: auto;
  margin-right: auto;
  font-size: 18px;
  justify-content: center;
  text-align: center;
  opacity: 0.6;
  transition: 0.3s;
  border-radius: 6px;
  padding: 5px;

  :hover {
    opacity: 1;
  }
`;

const StyledInput = styled.input`
  display: ${props => (props.showEmailButton ? "block" : "none")};
  margin: 0 auto 10px auto;
  width: 90%;
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
    <Fragment>
      <StyledInput showEmailButton={showEmailButton} onChange={handleChange} />
      <StyledButton
        onClick={() => {
          sendMail(message);
        }}
        showEmailButton={showEmailButton}
      >
        Email me!
      </StyledButton>
    </Fragment>
  );
};

export default EmailButton;
