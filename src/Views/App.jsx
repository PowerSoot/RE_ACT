import React, { useState } from 'react';
import FocusSection from './Focus';
import FeaturesSection from './FeaturesSection';
import TestimonialsSection from './TestimonialsSection';
import CallToAction from './CallToAction';
import Form from './Form';

const App = () => {
    const [showForm, setShowForm] = useState(false);

    const handleFormButtonClick = () => {
        setShowForm(true);
    };

    return (
        <div>
            <FocusSection />
            <FeaturesSection />
            <TestimonialsSection />
            <CallToAction />
            <div className="form-button-container">
                <button onClick={handleFormButtonClick}>Go to Form</button>
            </div>
            {showForm && <Form />}
        </div>
    );
};

export default App;
