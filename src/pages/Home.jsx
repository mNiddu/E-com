// src/Home.js

import React from 'react';
import { Link } from 'react-router-dom'; // Ensure react-router-dom is installed

const Home = () => {
    return (
        <div style={styles.container}>
            {/* Welcome Section */}
            <section style={styles.welcomeSection}>
                <h1 style={styles.title}>Welcome to Our Website</h1>
                <p style={styles.description}>
                    We are thrilled to have you here! Explore our website to discover the best products and services tailored just for you.
                </p>
                <div style={styles.buttons}>
                    <Link to="/about" style={styles.link}>
                        <button style={styles.button}>Learn More About Us</button>
                    </Link>
                    <Link to="/contact" style={styles.link}>
                        <button style={styles.button}>Get in Touch</button>
                    </Link>
                </div>
            </section>

            {/* Features Section */}
            <section style={styles.featuresSection}>
                <h2 style={styles.sectionTitle}>Our Features</h2>
                <div style={styles.features}>
                    <div style={styles.feature}>
                        <h3 style={styles.featureTitle}>Feature 1</h3>
                        <p style={styles.featureDescription}>
                            Describe the first feature here. Highlight what makes it valuable.
                        </p>
                    </div>
                    <div style={styles.feature}>
                        <h3 style={styles.featureTitle}>Feature 2</h3>
                        <p style={styles.featureDescription}>
                            Describe the second feature here. Explain how it benefits the user.
                        </p>
                    </div>
                    <div style={styles.feature}>
                        <h3 style={styles.featureTitle}>Feature 3</h3>
                        <p style={styles.featureDescription}>
                            Describe the third feature here. Focus on the unique aspects.
                        </p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section style={styles.ctaSection}>
                <h2 style={styles.ctaTitle}>Ready to Get Started?</h2>
                <p style={styles.ctaDescription}>
                    Join us today and be a part of our amazing community. Explore our offerings and get started on your journey with us.
                </p>
                <Link to="/contact" style={styles.link}>
                    <button style={styles.ctaButton}>Contact Us Now</button>
                </Link>
            </section>
        </div>
    );
};

// Inline styles for the home page
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        backgroundColor: '#f4f4f4',
        minHeight: '100vh'
    },
    welcomeSection: {
        textAlign: 'center',
        padding: '50px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        marginBottom: '30px'
    },
    title: {
        fontSize: '2.5em',
        marginBottom: '20px'
    },
    description: {
        fontSize: '1.2em',
        marginBottom: '30px'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
    },
    button: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    link: {
        textDecoration: 'none'
    },
    featuresSection: {
        textAlign: 'center',
        padding: '50px',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        marginBottom: '30px'
    },
    sectionTitle: {
        fontSize: '2em',
        marginBottom: '20px'
    },
    features: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    feature: {
        width: '30%',
        padding: '10px',
        backgroundColor: '#f9f9f9',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        marginBottom: '20px'
    },
    featureTitle: {
        fontSize: '1.5em',
        marginBottom: '10px'
    },
    featureDescription: {
        fontSize: '1em'
    },
    ctaSection: {
        textAlign: 'center',
        padding: '50px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    ctaTitle: {
        fontSize: '2em',
        marginBottom: '20px'
    },
    ctaDescription: {
        fontSize: '1.2em',
        marginBottom: '30px'
    },
    ctaButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
        color: '#007bff',
        fontSize: '16px',
        cursor: 'pointer',
        textDecoration: 'none'
    }
};

export default Home;
