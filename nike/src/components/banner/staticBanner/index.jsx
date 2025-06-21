import React from 'react'
import './style.css'
const StaticBanner = ({ bannerData }) => {
    console.log(bannerData)
    return (
        <div className='static-banner-main-container'>
            <div className='static-banner-wrapper'>{
                bannerData.map((item, index) => (
                    <div key={index} className='static-banner-content'>
                        <div className='static-banner-img-container'>
                            <img src={item.image} />
                        </div>
                        <div className='static-banner-title-container'>
                            <p>{item.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default StaticBanner;