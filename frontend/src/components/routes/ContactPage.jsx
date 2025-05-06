import React from 'react';
import './ContactPage.scss';
export default function ContactPage() {
    return (
        <div className="contact-page">
            <header className="contact-header">
                <h1>Contact Us</h1>
                <p>We're here to help you with all your real estate needs. Reach out to us today!</p>
            </header>

            <section className="contact-content">
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>

                <div className="contact-info">
                    <h2>Our Contact Information</h2>
                    <div className="info-item">
                        <h3>Address</h3>
                        <p>123 Main Street, Suite 456</p>
                        <p>City, State, 110022</p>
                    </div>
                    <div className="info-item">
                        <h3>Phone</h3>
                        <p>(123) 456-7890</p>
                    </div>
                    <div className="info-item">
                        <h3>Email</h3>
                        <p>info@nesify.com</p>
                    </div>
                </div>
            </section>

            <footer className="contact-footer">
                <p>&copy; 2023 Real Estate Company. All rights reserved.</p>
            </footer>
        </div>
    );
}