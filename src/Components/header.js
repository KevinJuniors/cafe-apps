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
                            <button type="button" className="btn btn-outline-success">
                                <a href="#">Home</a>
                            </button>
                        </li>

                        <li className="Info">
                            <button type="button" className="btn btn-outline-success">
                                <a href="#">Info</a>
                            </button>
                        </li>

                        <li className="Maps">
                            <button type="button" className="btn btn-outline-success">
                                <a href="#">Maps</a>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Header;