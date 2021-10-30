import React, { Component } from "react";
import "./css/container.css";
import "./css/banner.css";
import  Banner from "./banner";
import CoffeeImage from "../images/coffee-banners.png";
import MapContainer from "./mapContents";

class Container extends Component {
    render() {
        return (
            <div id="Info">
                <Banner />
                <br />

                <div className="contents">
                    <div className="imageWrap">
                        <img src={CoffeeImage} alt="CoffeeImage" />
                    </div>

                    <div className="textWrap">
                        <p className="text">
                            바쁜 일상에 지친 당신, 커피 한 잔으로 활력을 충전 해보세요!!
                        </p>
                    </div>

                    <div className="mapsWrap">
                        <MapContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;