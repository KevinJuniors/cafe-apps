import React, { Component } from "react";
import "./css/container.css";
import "./css/banner.css";
import  Banner from "./banner";
import CoffeeImage from "../images/cafes.jpg";
import MapContainer from "./mapContents";

class Container extends Component {
    render() {
        return (
            <div id="Info">
                <Banner />
                <br />

                <div className="contents">
                    <div className="imageWrap">
                        <img src={CoffeeImage} className="img-fluid" alt="CoffeeImage" />
                    </div>

                    <div className="textWrap">
                        <p className="text">
                            바쁜 일상에 지친 당신, 커피 한 잔으로 활력을 충전 해보세요!!
                        </p>
                    </div>

                    <hr />

                    <div className="mapsWrap">
                        <h2 className="titleText">인근 카페위치 찾기</h2>
                        <MapContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;