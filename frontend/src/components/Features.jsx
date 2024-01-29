import React from 'react';
import FeatureCard from './FeaturesCard';

const Features = () => {
    const features = [
        {
            title: 'Create Note',
            description: 'Users can create new notes by inputting text into a form and submitting it.'
        },
        {
            title: 'Read Note',
            description: 'Users can view a list of existing notes with their titles and contents.'
        },
        {
            title: 'Update Note',
            description: 'Users can edit the content of existing notes.'
        },
        {
            title: 'Delete Note',
            description: 'Users can delete unwanted notes from the list.'
        },
        {
            title: 'User Authentication',
            description: 'User authentication to allow multiple users to have their own set of notes and ensure data privacy.'
        },
        {
            title: 'Simple UI',
            description: 'Designing an intuitive and user-friendly interface for users to easily add text-based notes. This includes considerations such as layout, typography, colors, and input fields.'
        },
        {
            title: ' Note Organization',
            description: 'This application allow users to organize their notes effectively. '
        },
    ];

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center px-7">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
    );
};

export default Features;
