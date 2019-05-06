import React from "react";
import axios from "axios";
import Cookie from "./Cookie.jsx";
import Message from "./Message.jsx";
import EmailButton from "./EmailButton.jsx";
import NewMessageButton from "./NewMessageButton.jsx";
import SaveButton from "./SaveButton.jsx";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100%;
  width: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: [],
      message: null,
      showCookie: true,
      showMessage: false,
      showEmailButton: false,
      showEmailInput: false,
      showNewMessageButton: false,
      showSaveButton: false
    };

    this.updateCookie = this.updateCookie.bind(this);
    this.getRandomMessage = this.getRandomMessage.bind(this);
  }

  componentDidMount() {
    this.getRandomMessage();
    this.getFavoriteMessages();
  }

  getRandomMessage() {
    axios.get("/api/random").then(({ data }) => {
      this.setState({
        message: data
      });
    });
  }

  getFavoriteMessages() {
    axios.get("/faves").then(({ data }) => {
      this.setState({
        favorites: data
      });
    });
  }

  updateCookie() {
    const {
      showCookie,
      showMessage,
      showEmailButton,
      showEmailInput,
      showNewMessageButton,
      showSaveButton
    } = this.state;
    this.setState({
      showCookie: !showCookie,
      showMessage: !showMessage,
      showEmailButton: !showEmailButton,
      showEmailInput: !showEmailInput,
      showNewMessageButton: !showNewMessageButton,
      showSaveButton: !showSaveButton
    });
  }

  render() {
    const {
      message,
      showCookie,
      showMessage,
      showEmailButton,
      showNewMessageButton,
      showSaveButton
    } = this.state;
    return (
      <StyledDiv>
        <Cookie showCookie={showCookie} updateCookie={this.updateCookie} />
        <Message showMessage={showMessage} message={message} />
        <EmailButton showEmailButton={showEmailButton} message={message} />
        <NewMessageButton
          showNewMessageButton={showNewMessageButton}
          getRandomMessage={this.getRandomMessage}
        />
        <SaveButton showSaveButton={showSaveButton} message={message} />
      </StyledDiv>
    );
  }
}

export default App;
