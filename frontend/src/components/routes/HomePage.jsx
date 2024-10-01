import homepageCss from "../routes/HomePage.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function HomePage() {
    return (
        <div className={`${homepageCss.homecontent}`}>
            <div className={`${homepageCss.textcontainer}`}>
                <div className={`${homepageCss.wrapper}`}>
                    <h1 className={`${homepageCss.title}`}>
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p className={`${homepageCss.about}`}>
                        Discover your dream home with ease. Whether you're buying or renting, we provide expert guidance to help you find the perfect place. Our agents are committed to making your real estate journey smooth, transparent, and stress-free.
                    </p>
                    <SearchBar />
                    <div className={`${homepageCss.boxes}`}>
                        <div className={`${homepageCss.box}`}>
                            <p>16+</p>
                            <span>Years of Experience</span>
                        </div>
                        <div className={`${homepageCss.box}`}>
                            <p>200</p>
                            <span>Awards Gained</span>
                        </div>
                        <div className={`${homepageCss.box}`}>
                            <p>2000+</p>
                            <span>Properties Ready</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${homepageCss.bgcontainer}`}>
                <img src="/bg.png" alt="Background depicting real estate" />
            </div>
        </div>
    );
}
