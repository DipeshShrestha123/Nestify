import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import ListCard from "../card/ListCard";
import Filter from "../filter/Filter";
import "../listpage/ListPage.scss";
import Map from "../map/Map";
import { getAllListings } from "../utils/api"; 

export default function ListPage() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const [filteredData, setFilteredData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await getAllListings();
                const locationFilter = queryParams.get("location") || "";
                const typeFilter = queryParams.get("type") || "any";
                const minPriceFilter = parseInt(queryParams.get("minPrice")) || 0;
                const maxPriceFilter = parseInt(queryParams.get("maxPrice")) || Infinity;

                let filtered = response.data.filter((item) => 
                    (locationFilter === "" || item.location.toLowerCase().includes(locationFilter.toLowerCase())) &&
                    (typeFilter === "any" || item.type === typeFilter) &&
                    item.price >= minPriceFilter &&
                    item.price <= maxPriceFilter
                );

                // ✅ Show at least 5 listings only if filters are **completely empty**
                if (filtered.length === 0 && locationFilter === "" && typeFilter === "any" && minPriceFilter === 0 && maxPriceFilter === Infinity) {
                    filtered = response.data.slice(0, 5); // Show first 5 listings
                }

                setFilteredData(filtered);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [location.search]);

    return (
        <div className="list-page-content-container">
            <div className="list-page-content">
                <div className="list-page-wrapper">
                    <Filter location={queryParams.get("location") || ""} />
                    <div className="Listing">
                        {loading ? (
                            <p>Loading...</p>
                        ) : error ? (
                            <p>Error: {error}</p>
                        ) : filteredData.length > 0 ? (
                            filteredData.map((item) => <ListCard key={item._id} item={item} />)
                        ) : (
                            <p>No results found</p>
                        )}
                    </div>
                </div>
            </div>
            <div className="list-page-map-content">
                <Map items={filteredData} />
            </div>
        </div>
    );
}
