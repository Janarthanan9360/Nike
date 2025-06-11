import React from "react";
import Mainbanner from "../../assets/banner/Mainbanner.avif";
import "./BannerCard.css";
const BannerCard = () => {
return (
    <div className="banner-container">
        <div className="banner-image">
            <img src={Mainbanner} alt="main-banner" />
        </div>
    </div>
)
}

export default BannerCard;