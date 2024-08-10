// src/About.js

import React from 'react';

const About = () => {
    return (
        <div style={styles.container}>
            {/* Company History Section */}
            <section style={styles.historySection}>
                <h1 style={styles.title}>About Us</h1>
                <p style={styles.description}>
                    Our company was founded in [Year] with the mission to deliver exceptional [products/services] and outstanding customer service. Over the years, we have grown into a leading provider of [industry] solutions, committed to excellence and innovation.
                </p>
            </section>

            {/* Mission Section */}
            <section style={styles.missionSection}>
                <h2 style={styles.sectionTitle}>Our Mission</h2>
                <p style={styles.sectionDescription}>
                    Our mission is to [state your mission]. We strive to achieve this by [describe how you achieve your mission], ensuring that we deliver value and exceed our customers’ expectations.
                </p>
            </section>

            {/* Values Section */}
            <section style={styles.valuesSection}>
                <h2 style={styles.sectionTitle}>Our Values</h2>
                <ul style={styles.valuesList}>
                    <li style={styles.valueItem}>Integrity: We uphold the highest standards of integrity in all our actions.</li>
                    <li style={styles.valueItem}>Customer Focus: We place our customers at the center of everything we do.</li>
                    <li style={styles.valueItem}>Innovation: We embrace innovation and continuously seek to improve.</li>
                    <li style={styles.valueItem}>Excellence: We are committed to delivering excellence in all our endeavors.</li>
                </ul>
            </section>

            {/* Meet the Team Section */}
            <section style={styles.teamSection}>
                <h2 style={styles.sectionTitle}>Meet the Team</h2>
                <div style={styles.teamMembers}>
                    <div style={styles.teamMember}>
                        <img src="team-member1.jpg" alt="Team Member 1" style={styles.teamMemberImage} />
                        <h3 style={styles.teamMemberName}>John Doe</h3>
                        <p style={styles.teamMemberRole}>CEO</p>
                    </div>
                    <div style={styles.teamMember}>
                        <img src="team-member2.jpg" alt="Team Member 2" style={styles.teamMemberImage} />
                        <h3 style={styles.teamMemberName}>Jane Smith</h3>
                        <p style={styles.teamMemberRole}>CTO</p>
                    </div>
                    <div style={styles.teamMember}>
                        <img src="team-member3.jpg" alt="Team Member 3" style={styles.teamMemberImage} />
                        <h3 style={styles.teamMemberName}>Alice Johnson</h3>
                        <p style={styles.teamMemberRole}>Marketing Manager</p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section style={styles.ctaSection}>
                <h2 style={styles.ctaTitle}>Join Us on Our Journey</h2>
                <p style={styles.ctaDescription}>
                    We are always looking for talented individuals to join our team. If you are passionate about [industry] and want to make a difference, we would love to hear from you.
                </p>
                <a href="/careers" style={styles.ctaButton}>Explore Career Opportunities</a>
            </section>
        </div>
    );
};

// Inline styles for the about page
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '50px',
        maxWidth: '800px',
        margin: '0,auto',
        marginTop:'30px',
        backgroundColor: '#f9f9f1',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    historySection: {
        textAlign: 'center',
        marginBottom: '40px'
    },
    title: {
        fontSize: '2.5em',
        marginBottom: '20px'
    },
    description: {
        fontSize: '1.2em'
    },
    missionSection: {
        marginBottom: '40px'
    },
    sectionTitle: {
        fontSize: '2em',
        marginBottom: '20px'
    },
    sectionDescription: {
        fontSize: '1.2em'
    },
    valuesSection: {
        marginBottom: '40px'
    },
    valuesList: {
        listStyleType: 'disc',
        paddingLeft: '20px'
    },
    valueItem: {
        fontSize: '1.2em',
        marginBottom: '10px'
    },
    teamSection: {
        marginBottom: '40px'
    },
    teamMembers: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap'
    },
    teamMember: {
        textAlign: 'center',
        marginBottom: '20px',
        width: '30%'
    },
    teamMemberImage: {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        objectFit: 'cover',
        marginBottom: '10px'
    },
    teamMemberName: {
        fontSize: '1.5em',
        marginBottom: '5px'
    },
    teamMemberRole: {
        fontSize: '1.2em',
        color: '#666'
    },
    ctaSection: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: '#007bff',
        color: '#fff',
        borderRadius: '8px'
    },
    ctaTitle: {
        fontSize: '2em',
        marginBottom: '20px'
    },
    ctaDescription: {
        fontSize: '1.2em',
        marginBottom: '20px'
    },
    ctaButton: {
        display: 'inline-block',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#ffffff',
        color: '#007bff',
        fontSize: '16px',
        textDecoration: 'none'
    }
};

export default About;
