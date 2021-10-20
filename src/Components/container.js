import React, { Component } from "react";
import "./container.css";
import "./banner.css";
import  Banner from "./banner";

class Container extends Component {
    render() {
        return (
            <div id="container">
                <Banner />
            </div>
        )
    }
}

export default Container;