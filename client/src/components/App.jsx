import React from "react";
import axios from "axios";
import Cookie from "./Cookie.jsx";
import Message from "./Message.jsx";
import EmailButton from "./EmailButton.jsx";
import NewMessageButton from "./NewMessageButton.jsx";
import SaveButton from "./SaveButton.jsx";
import FavesButton from "./FavesButton.jsx";
import Favorites from "./Favorites.jsx";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledDiv = styled.div`
  display: flex;
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
      showSaveButton: false,
      showFavesButton: false,
      showFavorites: false
    };

    this.updateCookie = this.updateCookie.bind(this);
    this.getRandomMessage = this.getRandomMessage.bind(this);
    this.updateFavorites = this.updateFavorites.bind(this);
  }

  componentDidMount() {
    this.getRandomMessage();
    this.getFavoriteMessages();
  }

  getRandomMessage() {
    axios.get("/api/random").then(({ data: messages }) => {
      this.setState({
        message: messages
      });
    });
  }

  getFavoriteMessages() {
    axios.get("/faves").then(({ data: faves }) => {
      this.setState({
        favorites: faves
      });
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
        <Message showMessage={showMessage} message={message} />
        <StyledDiv>
          <EmailButton showEmailButton={showEmailButton} message={message} />
          <NewMessageButton
            showNewMessageButton={showNewMessageButton}
            getRandomMessage={getRandomMessage}
          />
          <SaveButton showSaveButton={showSaveButton} message={message} />
          <FavesButton
            showFavesButton={showFavesButton}
            updateFavorites={updateFavorites}
          />
          <Favorites showFavorites={showFavorites} favorites={favorites} />
        </StyledDiv>
      </Wrapper>
    );
  }
}

export default App;
