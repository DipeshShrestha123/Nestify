import { useState } from 'react'
import "../ImageSlider/Slider.scss"


function Slider({itemImages}) {
  const [ImgIdx , SetImgIdx] = useState(null);
  const ChangeSlide = (direction) =>{
    if(direction === 'left'){
      if(ImgIdx === 0){
        SetImgIdx(itemImages.length - 1);
      }
      else{
        SetImgIdx(ImgIdx-1);
        
      }
    }else{
      if(ImgIdx === itemImages.length-1){
        SetImgIdx(0);
      }
      else{
        SetImgIdx(ImgIdx+1);  
      }
    }
  }
  return (
    <div className="slideContainer">
      
      { ImgIdx !== null &&
      (<div className="fullSlider">
        <div className="arrow">
          <img src="/arrow.png" alt="arrow" onClick={() => ChangeSlide('left')}/>
        </div>
        <div className="fullImage">
          <img src= {itemImages[ImgIdx]} alt="image" />
          <div className="Close" onClick={() => SetImgIdx(null) }>X</div>
        </div>
        <div className="arrow" >
          <img src="/arrow.png" alt="arrow" className='Arrow-Right' onClick={() => ChangeSlide('right')}/>
        </div>
        
      </div>)}


        <div className="bigImage">
          <img src= {itemImages[0]} alt="image" onClick={() => SetImgIdx(0) }  />
        </div>
        <div className="smallImage">
          {
            itemImages.slice(1).map((image,index) => (
              <img src = {image} alt="" key={index} onClick={() => SetImgIdx(index + 1) }  />
            ))
          }
        </div>

    </div>
  )
}

export default Slider