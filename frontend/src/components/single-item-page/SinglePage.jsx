import  { useState, useEffect } from "react";
import Slider from "../ImageSlider/Slider";
import { useParams } from "react-router-dom";
import "./SinglePage.scss";
import { userdata } from "../../lib/listdata";
import Map from "../map/Map";
import { getListingById } from '../utils/api';

export default function SinglePage() {
    const { _id } = useParams(); // Get the ID from the URL
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                 const response = await getListingById(_id);
                setItem(response.data);
            } catch (err) {
                setError("Failed to load data");
                console.log(err)
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [_id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
    if (!item) return <div>Item not found</div>;

    return (
      <div className="single-page-container">
        <div className="details">
          <div className="wrapper">
            {/* Slider Component */}
            <Slider itemImages={item.image} />
  
            {/* Info Section */}
            <div className="detail-cont">
              <div className="info-container">
                <h1>{item.title}</h1>
                <div className="address">
                  <img src="/location.png" alt="pin" />
                  <span>{item.location}</span>
                </div>
                <div className="price">
                  <span>$ {item.price}</span>
                </div>
              </div>
              <div className="user">
                <img src={userdata[0].UserImg} alt="userImg" />
                <span>{userdata[0].UserName}</span>
              </div>
            </div>
            <p className="desc">{item.description}</p>
          </div>
        </div>
  
        {/* Features Section */}
        <div className="features-container">
          <b>General</b>
          <div className="general-feature-items">
            <div className="general-feature-item">
              <img src="/utility.png" alt="" />
              <div className="VerticalList">
                <span>Utilities</span>
                <span>Renter is responsible</span>
              </div>
              
            </div>
            <div className="general-feature-item">
              <img src="/pet.png" alt="" />
              <div className="VerticalList">
                <span>Pet Policy</span>
                <span>Pet {item.pet_allowed}</span>
              </div>
            </div>
            <div className="general-feature-item">
              <img src="/fee.png" alt="" />
              <div className="VerticalList">
                <span>Property Fees</span>
                <span>Must have 3x the rent in total household income</span>
                </div>
            </div>
          </div>
  
          <b>Room Sizes</b>
          <div className="room-feature-items">
            <div className="room-feature-item">
              <img src="/size.png" alt="" />
              <span>{item.room_size}80 Sqft</span>
            </div>
            <div className="room-feature-item">
              <img src="/bed.png" alt="" />
              <span>{item.bedRooms} beds</span>
            </div>
            <div className="room-feature-item">
              <img src="/bath.png" alt="" />
              <span>{item.bathRooms} bathroom</span>
            </div>
          </div>
  
          <b>Location</b>
          <div className="map-container">
            <Map items={[item]} />
          </div>
          <div className="Buttons">
            <button>
              <img src="/chat.png" alt="chat" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="save" />
              Send the place
            </button>
          </div>
        </div>
      </div>
    );
}
