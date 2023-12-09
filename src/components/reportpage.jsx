import '../styles/reportpage.css';

import React, { useState, useEffect } from 'react';

const WordList = ({ title, items }) => (
  <div className="box">
    <h3>{title}</h3>
    <ul className="word-list">
      {items.map((item, index) => (
        <li key={index} className="word-item">
          <strong>{item.word}</strong>: {item.description}
        </li>
      ))}
    </ul>
  </div>
);

const ReportPage = () => {
  // Simulating sample data (replace with actual fetching logic from apii)
  const sampleStories = [
    {
      title: 'Story 1',
      nouns: [
        { word: 'Dog', description: 'A furry friend' },
        { word: 'Tree', description: 'Tall and green' },
        { word: 'Read', description: 'Understand written words' },
        { word: 'Read', description: 'Understand written words' },
        { word: 'Read', description: 'Understand written words' },
      ],
      verbs: [
        { word: 'Run', description: 'Move rapidly' },
        { word: 'Read', description: 'Understand written words' },
        { word: 'Read', description: 'Understand written words' },
        { word: 'Read', description: 'Understand written words' },
        
      ],
    },
    {
      title: 'Story 2',
      nouns: [
        { word: 'Cat', description: 'Independent creature' },
        { word: 'Mountain', description: 'Tall and majestic' },
      ],
      verbs: [
        { word: 'Jump', description: 'Leap through the air' },
        { word: 'Write', description: 'Put thoughts into words' },
      ],
    },
    {
        title: 'Story 3',
        nouns: [
          { word: 'Cat', description: 'Independent creature' },
          { word: 'Mountain', description: 'Tall and majestic' },
        ],
        verbs: [
          { word: 'Jump', description: 'Leap through the air' },
          { word: 'Write', description: 'Put thoughts into words' },
        ],
      },
    // Add more sample stories as needed
  ];

  // State to hold the fetched stories
  const [stories, setStories] = useState([]);

  useEffect(() => {
    // Simulating data fetching logic
    setStories(sampleStories);
  }, []);

  return (
    <div>
      <h1>Grammar Parser Report Page</h1>
      {stories.map((story, index) => (
        <div key={index} className="main-box">
          <h2>{story.title}</h2>
          <div className="box-container">
            <WordList title="Nouns" items={story.nouns} />
            <WordList title="Verbs" items={story.verbs} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReportPage;
