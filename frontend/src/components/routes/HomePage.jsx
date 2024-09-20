import "../routes/HomePage.css"
import SearchBar from "../SearchBar/SearchBar";
import "../../../public/bg.png"
export default function HomePage(){
    return(
        <>
        <div className="home-content">
            <div className="text-container">
                <div className="wrapper">
                <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
                <p className="about">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores facere fugiat ut cumque reprehenderit debitis necessitatibus repellat molestiae ipsa assumenda? Ratione, molestias! Facilis optio autem pariatur eligendi nihil cumque voluptatem illo, repellendus omnis dolor aliquam maxime, asperiores consectetur perferendis hic?</p>
                <SearchBar />
                <div className="boxes">
                    <div className="box">
                        <p>16+ </p>
                        <span>Years of Experince</span>
                    </div>
                    <div className="box">
                        <p>16+ </p>
                        <span>Years of Experince</span>
                    </div>
                    <div className="box">
                        <p>16+ </p>
                        <span>Years of Experince</span>
                    </div>

                </div>
                </div>
            </div>

            <div className="bg-container">
                <img src="/bg.png" alt="" />
            </div>
        </div>
        </>
    );
}