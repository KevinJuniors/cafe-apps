import React, { Component } from "react";
import "./banner.css";
import BannerImage from "../images/coffee-banner-images.png";

class Banner extends Component {
    render() {
        return (
            <div id="bannerWrap">
                <div className="BannerImage">
                    <img src={BannerImage} alt="BannerImage" />
                </div>
            </div>
        )
    }
}

export default Banner;