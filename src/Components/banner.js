import React, { Component } from "react";
import "./banner.css";
import BannerImage from "../images/coffee-banner-images.png";
// import thirdBanner from "../images/coffee-banner-03.png";

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