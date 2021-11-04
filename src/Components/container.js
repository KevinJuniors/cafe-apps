import React, { Component } from "react";
import "./css/container.css";
import "./css/banner.css";
import  Banner from "./banner";
import CoffeeImage from "../images/cafe.jpg";
import MapContainer from "./mapContents";
import starbucksIcon from "../images/starbucks-icon.jpg";
import ediyaIcon from "../images/Ediya-icon.jpg";
import composeIcon from "../images/compose-icon.jpg";
import megaIcon from "../images/mega-icon.jpg";

class Container extends Component {
    render() {
        return (
            <div id="Info">
                <Banner />
                <br />

                <div id="contents">
                    <div className="imageWrap">
                        <img src={CoffeeImage} alt="CoffeeImage" />
                    </div>

                    <div className="textWrap">
                        <p className="text">
                            바쁜 일상에 지친 당신, 커피 한 잔으로 활력을 충전 해보세요!!
                        </p>
                    </div>

                    <div className="mapsWrap">
                        <h2>인근 카페정보 찾아보기</h2>
                        <MapContainer />
                    </div>

                    <div className="iconWrap">
                        <ul claaName="icons">
                            <li className="starbucks">
                                <p>스타벅스</p>
                                <a href="https://www.starbucks.co.kr/menu/drink_list.do" title="스타벅스 메뉴 보러가기">
                                    <img src={starbucksIcon} alt="starbucks-icon" />
                                </a>
                            </li>

                            <li className="hollys">
                                <p>이디야 커피</p>
                                <a href="https://www.hollys.co.kr/menu/espresso.do" title="이디야커피 메뉴 보러가기">
                                    <img src={ediyaIcon} alt="Ediya-icon" />
                                </a>
                            </li>

                            <li className="compose">
                                <p>컴포즈 커피</p>
                                <a href="https://composecoffee.com/index.php?mid=board_koTk88&category=185" title="컴포즈커피 메뉴 보러가기">
                                    <img src={composeIcon} alt="compose-icon" />
                                </a>
                            </li>

                            <li className="mega">
                                <p>메가 커피</p>
                                <a href="http://www.megacoffee.me/bbs/content.php?co_id=menu1" title="메가커피 메뉴 보러가기">
                                    <img src={megaIcon} alt="mega-icon" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container;