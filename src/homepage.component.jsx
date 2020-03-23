import React from 'react';
import './homepage.styles.scss';

const Homepage = () => (
    <div className="homepage">
        <div className="menu-container">
            <div className="menu-item">
                <div className="menu-content">
                    <h1 className="title">T-SHIRTS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-content">
                    <h1 className="title">HOODIES</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-content">
                    <h1 className="title">JOGGERS</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-content">
                    <h1 className="title">WORKOUT GEAR</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-content">
                    <h1 className="title">FOOTWEAR</h1>
                    <span className="subtitle">SHOP NOW</span>
                </div>
            </div>
        </div>
    </div>
);

export default Homepage;