import React, { Component } from "react";
import "./css/banner.css";
import BannerImage from "../images/coffee-image-banners.jpg";

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