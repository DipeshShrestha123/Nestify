import { Link } from "react-router-dom";
import "./ListCard.scss";
export default function ListCard({ item, setIsChatVisible }) {
    return (
        <div className="cardcontainer">
            <Link to={`/list/${item._id}`} className="imgcontainer">
                <img src={item.image[0]} alt="" className="listimg" />
            </Link>
            <div className="cardItemContainer">
                <Link to={`/list/${item._id}`} className="scaletrans" item={item}>
                    <h2>{item.title}</h2>
                </Link>
                <p>
                    <img src="/location.png" className="locationimg" alt="Location" />
                    {item.location}, {item.country}
                </p>
                <div className="price">
                    <p>$ {item.price}</p>
                </div>
                <div className="cardtextcontainer">
                    <div className="features">
                        <div className="feature">
                            <img src="/bed.png" className="featureimg icon" alt="Bedroom" />
                            <span className="featurename">{item.bedRooms} Bedroom </span>
                        </div>
                        <div className="feature">
                            <img src="/bath.png" className="featureimg icon" alt="Bathroom" />
                            <span className="featurename">{item.bathRooms} Bathroom </span>
                        </div>
                    </div>
                    <div className="icons">
                        <div className="iconitem">
                            <img src="/save.png" className="iconimg icon" alt="Save" />
                        </div>
                        <div className="iconitem"  onClick={(e) => {
                            e.stopPropagation(); // Prevent triggering parent click
                            setIsChatVisible(true);
                        }}> 
                            <img src="/chat.png" className="iconimg icon" alt="Chat" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
