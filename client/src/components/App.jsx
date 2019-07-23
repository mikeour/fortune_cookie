import React from "react";
import axios from "axios";
import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import Cookie from "./Cookie.jsx";
import Message from "./Message.jsx";
import EmailButton from "./EmailButton.jsx";
import NewMessageButton from "./NewMessageButton.jsx";
import SaveButton from "./SaveButton.jsx";
import Favorites from "./Favorites.jsx";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  html { 
    background: url('https://upload.wikimedia.org/wikipedia/commons/d/d2/Fortune_cookies.jpg') no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  
  * {
    font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StyledMessageDiv = styled.div`
  display: block;
  height: 350px;
  width: 100%;
  margin: auto;
  position: relative;
`;

const StyledText = styled.p`
  display: inline-block;
  text-align: center;
  font-size: 20px;
  padding: 15px;
`;

const EmailWrapper = styled.div`
  justify-content: center;
  display: inline-block;
  width: 50%;
`;

const EmailDiv = styled.div`
  display: ${props => (props.showEmailButton ? "block" : "none")};
  width: 65%;
  padding: 15px;
  margin: 0 auto;
  background: white;
  border: 1px solid black;
  border-radius: 15px;
`;

const SaveWrapper = styled.div`
  width: 50%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      favorites: [],
      showCookie: true,
      showMessage: false,
      showEmailButton: false,
      showEmailInput: false,
      showNewMessageButton: false,
      showSaveButton: false,
      showFavesButton: false,
      showFavorites: false
    };

    this.getRandomMessage = this.getRandomMessage.bind(this);
    this.getFavoriteMessages = this.getFavoriteMessages.bind(this);
    this.updateFavorites = this.updateFavorites.bind(this);
    this.updateCookie = this.updateCookie.bind(this);
  }

  componentDidMount() {
    this.getRandomMessage();
    this.getFavoriteMessages();
  }

  getRandomMessage() {
    axios.get("/api/random").then(({ data: message }) => {
      this.setState({ message });
    });
  }

  getFavoriteMessages() {
    axios.get("/api/faves").then(({ data: favorites }) => {
      this.setState({ favorites });
    });
  }

  updateFavorites() {
    const { showFavorites } = this.state;
    this.setState(
      {
        showFavorites: !showFavorites
      },
      () => this.getFavoriteMessages()
    );
  }

  updateCookie() {
    const {
      showCookie,
      showMessage,
      showEmailButton,
      showEmailInput,
      showNewMessageButton,
      showSaveButton,
      showFavesButton
    } = this.state;
    this.setState({
      showCookie: !showCookie,
      showMessage: !showMessage,
      showEmailButton: !showEmailButton,
      showEmailInput: !showEmailInput,
      showNewMessageButton: !showNewMessageButton,
      showSaveButton: !showSaveButton,
      showFavesButton: !showFavesButton
    });
  }

  render() {
    const {
      message,
      favorites,
      showCookie,
      showMessage,
      showEmailButton,
      showNewMessageButton,
      showSaveButton,
      showFavesButton,
      showFavorites
    } = this.state;

    const { updateCookie, getRandomMessage, updateFavorites } = this;

    return (
      <Wrapper>
        <Cookie showCookie={showCookie} updateCookie={updateCookie} />
        <StyledMessageDiv>
          <Message showMessage={showMessage} message={message} />
        </StyledMessageDiv>
        <StyledDiv>
          <EmailWrapper>
            <EmailDiv showEmailButton={showEmailButton}>
              <StyledText>
                Don't want to forget your advice? We'll email it to you!
              </StyledText>
              <EmailButton
                showEmailButton={showEmailButton}
                message={message}
              />
            </EmailDiv>
          </EmailWrapper>
          <NewMessageButton
            showNewMessageButton={showNewMessageButton}
            getRandomMessage={getRandomMessage}
          />
          <SaveWrapper>
            <EmailDiv showEmailButton={showEmailButton}>
              <StyledText>Let others know you enjoyed your advice!</StyledText>
              <SaveButton
                showSaveButton={showSaveButton}
                message={message}
                showFavorites={showFavorites}
                showFavesButton={showFavesButton}
                updateFavorites={updateFavorites}
              />
            </EmailDiv>
          </SaveWrapper>
        </StyledDiv>
        <Favorites showFavorites={showFavorites} favorites={favorites} />
        <GlobalStyle />
      </Wrapper>
    );
  }
}

export default App;
