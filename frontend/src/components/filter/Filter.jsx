import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../filter/Filter.scss";

export default function Filter({ location }) {
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(useLocation().search);

    const [filters, setFilters] = useState({
        location: queryParams.get("location") || location || "",
        type: queryParams.get("type") || "any",
        property: queryParams.get("property") || "any",
        minPrice: queryParams.get("minPrice") || "",
        maxPrice: queryParams.get("maxPrice") || "",
        bedroom: queryParams.get("bedroom") || "any",
    });

    const handleChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    const applyFilters = () => {
        const params = new URLSearchParams();
        if (filters.location) params.set("location", filters.location);
        if (filters.type !== "any") params.set("type", filters.type);
        if (filters.property !== "any") params.set("property", filters.property);
        if (filters.minPrice) params.set("minPrice", filters.minPrice);
        if (filters.maxPrice) params.set("maxPrice", filters.maxPrice);
        if (filters.bedroom !== "any") params.set("bedroom", filters.bedroom);

        navigate(`/list?${params.toString()}`);
    };

    return (
        <div className="filter-container">
            <p className="search-results">
                Search results for <b>{filters.location}</b>
            </p>
            <input type="text" name="location" placeholder="City Location" className="input-location" value={filters.location} onChange={handleChange} />

            <div className="item-container">
                <div className="item">
                    <label htmlFor="type">Type</label>
                    <select name="type" className="select-btn" id="type" value={filters.type} onChange={handleChange}>
                        <option value="any">Any</option>
                        <option value="buy">Buy</option>
                        <option value="rent">Rent</option>
                    </select>
                </div>
                <div className="item">
                    <label htmlFor="minprice">Min Price</label>
                    <input type="number" name="minPrice" className="select-btn" value={filters.minPrice} onChange={handleChange} />
                </div>
                <div className="item">
                    <label htmlFor="maxprice">Max Price</label>
                    <input type="number" name="maxPrice" className="select-btn" value={filters.maxPrice} onChange={handleChange} />
                </div>
                <button className="filter-search-btn" onClick={applyFilters}>
                    <img src="/search.png" className="search-img" alt="Search" />
                </button>
            </div>
        </div>
    );
}
