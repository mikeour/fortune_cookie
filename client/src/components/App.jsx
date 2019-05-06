import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null
    };
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

  render() {
    const { message } = this.state;
    return <React.Fragment>{message && <p>{message}</p>}</React.Fragment>;
  }
}

export default App;
