import "../routes/HomePage.scss";
import SearchBar from "../SearchBar/SearchBar";

export default function HomePage() {
    return (
        <div className="home-content">
            <div className="text-container">
                <div className="wrapper">
                    <h1 className="title">
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p className="about">
                        Discover your dream home with ease. Whether you're buying or renting, we provide expert guidance to help you find the perfect place. Our agents are committed to making your real estate journey smooth, transparent, and stress-free.
                    </p>
                    <SearchBar />
                    <div className="boxes">
                        <div className="box">
                            <p>16+</p>
                            <span>Years of Experience</span>
                        </div>
                        <div className="box">
                            <p>200</p>
                            <span>Awards Gained</span>
                        </div>
                        <div className="box">
                            <p>2000+</p>
                            <span>Properties Ready</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-container">
                <img src="/bg.png" alt="Background depicting real estate" />
            </div>
        </div>
    );
}
