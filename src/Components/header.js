import React, { Component } from "react";

class Header extends Component {
    render() {
        return (
            <div id="header">
                <h1 className="logo">
                    <img src="images/coffee-logo.png" alt="coffee-images" />
                </h1>
            </div>
        )
    }
}

export default Header;