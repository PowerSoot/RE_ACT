import React from 'react';

const FeaturesSection = () => {
    return (
        <div className="features">
            <h2>Our Features</h2>
            <div className="feature">
                <img src="path-to-icon1.png" alt="Feature 1" />
                <h3>Feature 1</h3>
                <p>Short description of feature 1.</p>
            </div>
            <div className="feature">
                <img src="path-to-icon2.png" alt="Feature 2" />
                <h3>Feature 2</h3>
                <p>Short description of feature 2.</p>
            </div>
            <div className="feature">
                <img src="path-to-icon3.png" alt="Feature 3" />
                <h3>Feature 3</h3>
                <p>Short description of feature 3.</p>
            </div>
        </div>
    );
};

export default FeaturesSection;
