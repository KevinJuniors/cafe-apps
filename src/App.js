import { Component } from 'react';
import './App.css';
import Header from "./Components/Header";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import DynamicWeb from "./Components/DynamicwebSettings";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container />
        <Footer />
        <DynamicWeb />
      </div>
    );
  }
}

export default App;