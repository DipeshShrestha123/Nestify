import React from 'react';
import './AgentPage.scss';

export default function AgentPage() {
    return (
        <div className="agent-page">
            <header className="agent-header">
                <h1>Meet Our Agent</h1>
                <p>Professional, experienced, and ready to help you find your dream home.</p>
            </header>

            <section className="agent-details">
                <div className="agent-info">
                    <img src="/subhash.jpg" alt="Agent" className="agent-photo" />
                    <h2 className="agent-name">Subhash Shrestha</h2>
                    <p className="agent-title">Real Estate Agent</p>
                    <p className="agent-bio">
                        With over 10 years of experience in the real estate industry, Subhash has helped hundreds of clients find their perfect home. 
                        His dedication and expertise make him one of the top agents in the area.
                    </p>
                    <div className="agent-contact">
                        <p>Email: Subhash088@gmail.com</p>
                        <p>Phone: (123) 456-7890</p>
                    </div>
                </div>
            </section>

            <footer className="agent-footer">
                <p>&copy; 2023 Real Estate Company. All rights reserved.</p>
            </footer>
        </div>
    );
}