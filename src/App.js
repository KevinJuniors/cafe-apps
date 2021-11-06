import { Component } from 'react';
import './App.css';
import Header from "./Components/header";
import Container from "./Components/container";
import Footer from "./Components/footer";
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