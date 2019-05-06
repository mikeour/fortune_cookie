import React from "react";
import axios from "axios";
import Cookie from "./Cookie.jsx";

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
    return (
      <React.Fragment>
        <Cookie />
      </React.Fragment>
    );
  }
}

export default App;
