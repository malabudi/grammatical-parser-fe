import '../styles/reportpage.css';
import React from 'react';

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

const ReportPage = (props) => {
  const handleClick = () => {
    props.setIsParsed(false);
    props.setIsStorySaved(false);
    props.setStoryTitle('');
    props.setStoryDesc('');
    props.setStorySubj('');
  }

  return (
    <div>
      <h1>Grammatical Parser Report Page</h1>
      {props.stories.map((story, index) => (
        <div key={index} className="main-box">
          <h2>{story.title}</h2>
          <div className="box-container">
            <WordList title="Nouns" items={story.nouns} />
            <WordList title="Verbs" items={story.verbs} />
          </div>
        </div>
      ))}
      <button
        onClick={handleClick}
        className='btn'
      >
        Add Another Story
      </button>
    </div>
  );
};

export default ReportPage;
