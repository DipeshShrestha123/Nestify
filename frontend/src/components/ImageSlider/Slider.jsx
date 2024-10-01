import React from 'react'
import "../ImageSlider/Slider.css"
function Slider({itemImages}) {
  return (
    <div className="slideContainer">
      <div className="fullSlider">
        <div className="arrowLeft">
          <img src="/arrow.png" alt="" />
        </div>
        <div className="fullImage">
          <img src= {itemImages[0]} alt="" />
        </div>
        <div className="arrowRight">
          <img src="/arrow.png" alt="" />
        </div>
      </div>
      <div className="bigImage">
        <img src= {itemImages[0]} alt="" />
      </div>
      <div className="smallImage">
        {
          itemImages.slice(1).map((image,index) => (
            <img src = {image} alt="" key={index} />
          ))
        }
      </div>
    </div>
  )
}

export default Slider