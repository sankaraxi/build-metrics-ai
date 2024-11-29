import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [formData, setFormData] = useState({ sqft: '', floors: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:5000/api/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const data = await response.json();
            localStorage.setItem('results', JSON.stringify(data));
            navigate('/results');
        } catch (error) {
            console.error('Error fetching prediction:', error);
        }
    };
    

    return (
        <div className="home-container">
            <h1>Build Metrics</h1>
            <form onSubmit={handleSubmit}>
                <label>No. of square feet:</label>
                <input type="text" name="sqft" value={formData.sqft} onChange={handleChange} required />

                <label>No. of floors:</label>
                <input type="text" name="floors" value={formData.floors} onChange={handleChange} required />

                <button type="submit">Estimate</button>
            </form>
        </div>
    );
};

export default Home;
