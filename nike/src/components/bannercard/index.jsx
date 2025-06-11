import React from "react";
import Mainbanner from "../../assets/banner/Mainbanner.avif";
const BannerCard = () => {
return (
    <div className="banner-container">
        <div className="banner-image">
            <img src={Mainbanner} alt={title} />
        </div>
    </div>
)
}

export default BannerCard;