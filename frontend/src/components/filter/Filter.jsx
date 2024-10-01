import FilterCss from "../filter/Filter.module.css";

export default function Filter({ location }) {
    return (
        <div className={`${FilterCss.filtercontainer}`}>
            <p className={`${FilterCss.searchrs}`}>
                Search results for <b>{location}</b>
            </p>
            <p className={`${FilterCss.locationtext}`}>Location</p>
            <input type="text" placeholder="City Location" className={`${FilterCss.inputlocation}`} />

            <div className={`${FilterCss.itemcontainer}`}>
                <div className={`${FilterCss.item}`}>
                    <label htmlFor="type">Type</label>
                    <select name="type" className={`${FilterCss.selectbtn}`} id="type">
                        <option value="any">any</option>
                        <option value="buy">buy</option>
                        <option value="rent">rent</option>
                    </select>
                </div>
                <div className={`${FilterCss.item}`}>
                    <label htmlFor="property">Property</label>
                    <select name="property" className={`${FilterCss.selectbtn}`} id="property">
                        <option value="any">any</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="villa">Villa</option>
                    </select>
                </div>
                <div className={`${FilterCss.item}`}>
                    <label htmlFor="minprice">Min Price</label>
                    <select name="minprice" className={`${FilterCss.selectbtn}`} id="minprice">
                        <option value="any">any</option>
                        <option value="minadd">minadd</option>
                    </select>
                </div>
                <div className={`${FilterCss.item}`}>
                    <label htmlFor="maxprice">Max Price</label>
                    <select name="maxprice" className={`${FilterCss.selectbtn}`} id="maxprice">
                        <option value="any">any</option>
                        <option value="maxadd">max add</option>
                    </select>
                </div>
                <div className={`${FilterCss.item}`}>
                    <label htmlFor="bedroom">Bedroom</label>
                    <select name="bedroom" className={`${FilterCss.selectbtn}`} id="bedroom">
                        <option value="any">any</option>
                        <option value="double">Double</option>
                        <option value="single">Single</option>
                    </select>
                </div>
                <button className={`${FilterCss.filtersearchbtn}`}>
                    <img src="/search.png" className={`${FilterCss.searchimg}`} alt="Search" />
                </button>
            </div>
        </div>
    );
}
