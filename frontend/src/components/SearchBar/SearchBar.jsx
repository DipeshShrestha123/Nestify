import { useState } from "react";
import SearchbarCss from "../SearchBar/SearchBar.module.css"
export default function SearchBar(){
    const types = ["buy","rent"];
    const [query , setQuery] = useState({
        type:"buy",
        location:"",
        minPrice:"",
        maxPrice:"",
    });

    const switchType = (val) => {
        setQuery((prev) => ({...prev , type : val}))
    };
    return(
        <div className={`${SearchbarCss.searchbar}`}>
            <div className={`${SearchbarCss.type}`}>
                {
                    types.map((type) => (
                        <button key={type}
                        name="type"
                        onClick={()=>switchType(type)}
                        className={`${SearchbarCss.typebtn} ${query.type === type ? SearchbarCss.active : ""}`}
                        >
                        {type}
                        </button>
                    ))
    
                }
            </div>

            <form>
                <input 
                type="text"
                className={`${SearchbarCss.homeinput}`}
                placeholder="City Location "/>
                <input type="text" placeholder="Min Price"
                name="minPrice"
                min={0}
                max={1000000}
                className={`${SearchbarCss.homeinput}`}
                />
                <input type="text" placeholder="Max Price"
                name="maxPrice"
                min={0}
                max={1000000}
                className={`${SearchbarCss.homeinput}`}
                />
                <button className={`${SearchbarCss.searchbtn}`}>
                    <img src="/search.png" alt="search-logo" className={`${SearchbarCss.searchimg}`} />
                </button>

            </form>
        </div>
    )
}