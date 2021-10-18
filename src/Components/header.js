import React, { Component } from "react";
import "./header.css";

class Header extends Component {
    render() {
        return (
            <div id="header">
                <h1 id="logo">Cafe Apps</h1>

                <nav className="navGroup">
                    <ul className="navbar">
                        <li className="Home">
                            <a href="#">Home</a>
                        </li>

                        <li className="Info">
                            <a href="#">Info</a>
                        </li>

                        <li className="Maps">
                            <a href="#">Maps</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;