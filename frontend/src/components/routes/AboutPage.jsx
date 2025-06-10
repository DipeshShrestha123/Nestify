import './AboutPage.scss'; 

export default function AboutPage() {
    return (
        <div className="about-page">
            <section className="about-intro">
                <h2>Who We Are</h2>
                <p>
                    At Nestify, we are dedicated to helping you find the perfect property that meets your needs. 
                    Whether you're buying, selling, or renting, our team of experienced professionals is here to guide you 
                    every step of the way. With years of experience in the real estate market, we pride ourselves on delivering 
                    exceptional service and results.
                </p>
            </section>

            <section className="about-mission">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to make real estate transactions seamless and stress-free. We strive to provide our clients 
                    with the highest level of service, transparency, and expertise. By understanding your unique needs, we 
                    ensure that you find the perfect home or investment property.
                </p>
            </section>

            <section className="about-team">
                <h2>Meet Our Team</h2>
                <div className="team-members">
                    <div className="team-member">
                        <img src="/subhash.jpg" alt="Team Member 1" />
                        <h3>Subhash Shrestha</h3>
                        <p>Real Estate Agent</p>
                    </div>
                    <div className="team-member">
                        <img src="/dipesh_img.jpg" alt="Team Member 2" />
                        <h3>Dipesh Shrestha</h3>
                        <p>Property Manager</p>
                    </div>
                    <div className="team-member">
                        <img src="/suraj.jpeg" alt="Team Member 3" />
                        <h3>Suraj Shrestha</h3>
                        <p>Investment Consultant</p>
                    </div>
                </div>
            </section>

            <section className="about-cta">
                <h2>Ready to Find Your Dream Home?</h2>
                <p>Contact us today to get started on your real estate journey.</p>
                <a className="cta-button" href='/list'>Get in Touch</a>
            </section>
        </div>
    );
}