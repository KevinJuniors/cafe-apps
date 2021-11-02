import { Component } from 'react';
// import { useMeiadQuery } from "react-responsive";
// import Media from "react-media";
import './App.css';
// import DynamicWeb from "./Components/DynamicwebSettings";
// import "../src/Components/css/viewport.css";
// import "./Components/css/viewport.css";
import Header from "./Components/header";
import Container from "./Components/container";
// import Footer from "./Components/footer";
import DynamicWeb from "./Components/DynamicwebSettings";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container />
        {/* <Footer /> */}
        <DynamicWeb />
        {/* <DynamicWeb /> */}
        {/* <Media query={{maxWidth: 965}} /> */}
        {/* <useMediaQuery /> */}
        
      </div>
    );
  }
}

export default App;
