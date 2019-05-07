import React, { Fragment, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const StyledButton = styled.button`
  display: ${props => (props.showSaveButton ? "relative" : "none")};
  font-size: 32px;
  justify-content: center;
  text-align: center;
`;

const StyledInput = styled.input`
  display: ${props => (props.showSaveButton ? "relative" : "none")};
  margin-left: auto;
  margin-right: auto;
  width: 300px;
`;

const SaveButton = props => {
  const { showSaveButton, message } = props;
  const [name, setName] = useState(null);

  const saveToDatabase = msg => {
    axios.post("/save", { name, msg });
  };

  const handleChange = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <Fragment>
      <StyledButton
        showSaveButton={showSaveButton}
        onClick={() => {
          saveToDatabase(message);
        }}
      >
        Save!
      </StyledButton>
      <StyledInput showSaveButton={showSaveButton} onChange={handleChange} />
    </Fragment>
  );
};

export default SaveButton;
