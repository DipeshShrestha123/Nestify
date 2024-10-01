import ListCard from "../card/ListCard"
import Filter from "../filter/Filter"
import { listdata } from "../../lib/listdata"
import "../listpage/ListPage.css"
import Map from "../map/Map";
export default function ListPage(){
    const data = listdata;
    return(
        <div className="list-page-content-container">
            <div className="list-page-content">
                <div className="list-page-wrapper">
                <Filter location= "Pune" />
                    {
                        data.map((item)=>(
                        <ListCard key={item._id} item = {item}/>
                    ))
                    }
                </div>
            </div>
            
            <div className="list-page-map-content">
                <Map items = {data}/>
            </div>
        </div>

    )
}