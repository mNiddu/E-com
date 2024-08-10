// src/Contact.js

import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Form submitted successfully!');
        // You can add form submission logic here
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.title}>Contact Us</h1>
            <p style={styles.description}>
                We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.
            </p>
            <form onSubmit={handleSubmit} style={styles.form}>
                <label style={styles.label} htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                
                <label style={styles.label} htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    required
                />
                
                <label style={styles.label} htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    style={styles.textarea}
                    rows="4"
                    required
                />
                
                <button type="submit" style={styles.submitButton}>Send Message</button>
            </form>
        </div>
    );
};

// Inline styles for the contact page
const styles = {
    container: {
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
    },
    title: {
        fontSize: '2em',
        marginBottom: '20px',
        textAlign: 'center'
    },
    description: {
        fontSize: '1.2em',
        marginBottom: '30px',
        textAlign: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    label: {
        fontSize: '1em',
        marginBottom: '5px'
    },
    input: {
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '1em'
    },
    textarea: {
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ddd',
        borderRadius: '4px',
        fontSize: '1em'
    },
    submitButton: {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: '#007bff',
        color: '#fff',
        fontSize: '16px',
        cursor: 'pointer'
    }
};

export default Contact;
