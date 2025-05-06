import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../SearchBar/SearchBar.scss";

export default function SearchBar() {
    const navigate = useNavigate();
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: "",
        maxPrice: "",
    });

    const switchType = (val) => {
        setQuery((prev) => ({ ...prev, type: val }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuery((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const params = new URLSearchParams(query).toString();
        navigate(`/list?${params}`); // Redirect to /list with filters in URL
    };

    return (
        <div className="searchbar">
            <div className="type">
                {["buy", "rent"].map((type) => (
                    <button
                        key={type}
                        onClick={() => switchType(type)}
                        className={`typebtn ${query.type === type ? "active" : ""}`}
                    >
                        {type}
                    </button>
                ))}
            </div>

            <form className="FormTag" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="homeinput"
                    placeholder="City Location"
                    name="location"
                    value={query.location}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="Min Price"
                    name="minPrice"
                    className="homeinput"
                    value={query.minPrice}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    placeholder="Max Price"
                    name="maxPrice"
                    className="homeinput"
                    value={query.maxPrice}
                    onChange={handleChange}
                />
                <button type="submit" className="searchbtn">
                    <img src="/search.png" alt="search-logo" className="searchimg" />
                </button>
            </form>
        </div>
    );
}
