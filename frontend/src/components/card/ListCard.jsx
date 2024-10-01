import { Link } from "react-router-dom";
import ListcardCss from "../card/ListCard.module.css";

export default function ListCard({ item }) {
    return (
        <div className={`${ListcardCss.cardcontainer}`}>
            <Link to={`/list/${item._id}`} className={`${ListcardCss.imgcontainer}` }>
                <img src={item.image[0]} alt="" className={`${ListcardCss.listimg}`} />
            </Link>
            <div className={`${ListcardCss.cardItemContainer}`}>
                <Link to={`/list/${item._id}`} className={`${ListcardCss.scaletrans}`} item={item}>
                    <h2>{item.title}</h2>
                </Link>
                <p>
                    <img src="/location.png" className={`${ListcardCss.locationimg}`} alt="Location" />
                    {item.location}, {item.country}
                </p>
                <div className={`${ListcardCss.price}`}>
                    <p>$ {item.price}</p>
                </div>
                <div className={`${ListcardCss.cardtextcontainer}`}>
                    <div className={`${ListcardCss.features}`}>
                        <div className={`${ListcardCss.feature}`}>
                            <img src="/bed.png" className={`${ListcardCss.featureimg} ${ListcardCss.icon}`} alt="Bedroom" />
                            <span className={`${ListcardCss.featurename}`}>{item.bedRooms} Bedroom </span>
                        </div>
                        <div className={`${ListcardCss.feature}`}>
                            <img src="/bath.png" className={`${ListcardCss.featureimg} ${ListcardCss.icon}`} alt="Bathroom" />
                            <span className={`${ListcardCss.featurename}`}>{item.bathRooms} Bathroom </span>
                        </div>
                    </div>
                    <div className={`${ListcardCss.icons}`}>
                        <div className={`${ListcardCss.iconitem}`}>
                            <img src="/save.png" className={`${ListcardCss.iconimg} ${ListcardCss.icon}`} alt="Save" />
                        </div>
                        <div className={`${ListcardCss.iconitem}`}>
                            <img src="/chat.png" className={`${ListcardCss.iconimg} ${ListcardCss.icon}`} alt="Chat" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
