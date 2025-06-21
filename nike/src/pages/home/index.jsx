import React from "react";
import Header from "../../components/header";
import BannerCard from '../../components/bannercard'
import AutoCarousel from "../../components/minislider"
import StaticBanner from '../../components/banner/staticBanner'
import mrun from '../../assets/staticbanner/mrun.png'
import wrun from '../../assets/staticbanner/wrun.png'
import vintageshoes from '../../assets/staticbanner/vintageshoes.png'
const Home = () => {
    const staticbannerData = [{
        image: mrun,
        title: "Coole for summar"
    }, {
        image: wrun,
        title: "Retro running"
    }, {
        image: vintageshoes,
        title: "Field General"
    }]
    return (
        <div className="Home-main-container">
            <Header />
            <AutoCarousel />
            <BannerCard />
            <StaticBanner bannerData={staticbannerData} />
            <div>
                <h1>hello</h1>
            </div>
        </div>
    )
}
export default Home