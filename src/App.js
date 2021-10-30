import { Component } from 'react';
// import { useMeiadQuery } from "react-responsive";
// import Media from "react-media";
// import styled from "styled-components";
import './App.css';
import "../src/Components/css/viewport.css";
// import "./Components/css/viewport.css";
import Header from "./Components/header";
import Container from "./Components/container";
// import Footer from "./Components/footer";
// import DynamicwebSettings from "./Components/DynamicwebSettings";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container />
        {/* <Footer /> */}
        {/* <DynamicwebSettings /> */}
        {/* <Media query={{maxWidth: 965}} /> */}
      </div>
    );
  }
}

export default App;
