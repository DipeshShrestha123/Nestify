import React from 'react';
import Slider from '../ImageSlider/Slider';
import { useParams } from 'react-router-dom';
import { listdata } from "../../lib/listdata"
import SinglePageCss from "../single-item-page/SinglePage.module.css"; // Importing CSS module as `SinglePageCss`

export default function SinglePage() {
  const { _id } = useParams(); // Get the id from the URL
  const item = listdata.find((dataItem) => dataItem._id === _id); // Find the corresponding item
  if (!item) {
    return <div>Item not found</div>; // Handle item not found
  }
  return (
    <div className={`${SinglePageCss.singlePageContainer}`}>
      <div className={`${SinglePageCss.details}`}>
        <div className={`${SinglePageCss.wrapper}`}>
          {/* Slider Component */}
          <Slider itemImages = {item.image} />
          
          {/* Info Section */}
          <div className={`${SinglePageCss.infoContainer}`}>
            <h1>{item.title}</h1>
            <div className={`${SinglePageCss.address}`}>
              <img src="/location.png" alt="pin" />
              <span>{item.location}</span>
            </div>
            <div className={`${SinglePageCss.price}`}>
              <span>{item.price}</span>
            </div>
          </div>
          <p className={`${SinglePageCss.desc}`}>
            {item.description}
          </p>
        </div>
      </div>
      
      {/* Features Section */}
      
      <div className={`${SinglePageCss.featuresContainer}`}>
        <b>General</b>
        <div className={`${SinglePageCss.generalFeatureItems}`}>
          <div className={`${SinglePageCss.generalFeatureItem}`}>
            <img src="/utility.png" alt="" />
            <span>Utilities</span><br />
            <span>Renter is responsible</span>
          </div>
          <div className={`${SinglePageCss.generalFeatureItem}`}>
            <img src="/pet.png" alt="" />
            <span>Pet Policy</span><br />
            <span>Pet {item.pet_allowed}</span>
          </div>
          <div className={`${SinglePageCss.generalFeatureItem}`}>
            <img src="/fee.png" alt="" />
            <span>Property Fees</span><br />
            <span>Must have 3x the rent in total household income</span>
          </div>
        </div>
        
        <b>Room Sizes</b>
        <div className={`${SinglePageCss.roomFeatureItems}`}>
          <div className={`${SinglePageCss.roomFeatureItem}`}>
            <img src="/size.png" alt="" />
            <span>{item.room_size} 80Square</span>
          </div>
          <div className={`${SinglePageCss.roomFeatureItem}`}>
            <img src="/bed.png" alt="" />
            <span>{item.bedRooms}</span>
          </div>
          <div className={`${SinglePageCss.roomFeatureItem}`}>
            <img src="/bath.png" alt="" />
            <span>{item.bathRooms}</span>
          </div>
        </div>

        <b>Location</b>
        <div className={`${SinglePageCss.mapContainer}`}>
          Map
        </div>
      </div>
    </div>
  );
}
