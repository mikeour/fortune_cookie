import React from "react";
import axios from "axios";
import Cookie from "./Cookie.jsx";
import Message from "./Message.jsx";
import EmailButton from "./EmailButton.jsx";
import styled from "styled-components";

const StyledDiv = styled.div`
  border: 1px solid blue;
  height: 100%;
  width: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      showCookie: true,
      showMessage: false,
      showEmailButton: false
    };

    this.updateCookie = this.updateCookie.bind(this);
  }

  componentDidMount() {
    this.getRandomMessage();
  }

  getRandomMessage() {
    axios.get("/api/random").then(({ data }) => {
      this.setState({
        message: data
      });
    });
  }

  updateCookie() {
    const { showCookie, showMessage, showEmailButton } = this.state;
    this.setState({
      showCookie: !showCookie,
      showMessage: !showMessage,
      showEmailButton: !showEmailButton
    });
  }

  render() {
    const { message, showCookie, showMessage, showEmailButton } = this.state;
    return (
      <StyledDiv>
        <Cookie showCookie={showCookie} updateCookie={this.updateCookie} />
        <Message showMessage={showMessage} message={message} />
        <EmailButton showEmailButton={showEmailButton} message={message} />
      </StyledDiv>
    );
  }
}

export default App;
