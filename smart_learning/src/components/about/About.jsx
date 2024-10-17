import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="about-container">
            {/* Hero Section */}
            <div className="about-hero">
                <h1>About Us</h1>
                <p>
                    We are committed to providing an exceptional user experience through our secure and intuitive platform.
                </p>
            </div>

            {/* Mission Section */}
            <div className="about-section about-mission">
                <h2>Our Mission</h2>
                <p>
                    Our mission is to create a platform that empowers users with seamless access and robust security. We strive to continuously improve and innovate to meet your needs.
                </p>
            </div>

            {/* Team Section */}
            <div className="about-section about-team">
                <h2>Meet Our Team</h2>
                <div className="team-cards">
                    <div className="team-card">
                        <img src="data:image/jpeg;base64,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" alt="Team Member 1" />
                        <h3>John Doe</h3>
                        <p>Lead Developer</p>
                    </div>
                    <div className="team-card">
                        <img src="https://cdn2.stylecraze.com/wp-content/uploads/2012/08/Top-52-Hairstyles-For-Professional-Women-2.jpg.webp" alt="Team Member 2" />
                        <h3>Jane Smith</h3>
                        <p>UI/UX Designer</p>
                    </div>
                    <div className="team-card">
                        <img src="data:image/jpeg;base64,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" alt="Team Member 3" />
                        <h3>Mike Johnson</h3>
                        <p>Product Manager</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;