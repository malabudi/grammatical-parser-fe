

import '../styles/editmodel.css';
import React, { useState } from 'react';


const EditableWordList = ({ title, items, onUpdate, onAdd, onDelete }) => {
  const [editWord, setEditWord] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [newWord, setNewWord] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = () => {
    if (newWord.trim() !== '') {
      onAdd({ word: newWord, description: newDescription });
      setNewWord('');
      setNewDescription('');
    }
  };

  const handleItemClick = (index) => {
    setEditingIndex(index);
    setEditWord(items[index].word);
    setEditDescription(items[index].description);
  };

  const handleUpdate = (index, listType) => {
    onUpdate(index, listType, { word: editWord, description: editDescription });
    setEditingIndex(null); // Finish editing
  };

  const handleDelete = (index) => {
    onDelete(index);
    setEditingIndex(null); // Finish editing, if in edit mode
  };

  return (
    <div className="popup">
      <h3>{title}</h3>
      <ul className="word-list">
        {items.map((item, index) => (
          <li key={index} className="word-item">
            {editingIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editWord}
                  onChange={(e) => setEditWord(e.target.value)}
                />
                <input
                  type="text"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                />
                <button onClick={() => handleUpdate(index, title.toLowerCase())}>Save</button>
              </div>
            ) : (
              <div onClick={() => handleItemClick(index)}>
                <span>
                  <strong>{item.word}</strong>: {item.description}
                </span>
                <button onClick={() => handleDelete(index, title.toLowerCase())}>-</button>
              </div>
            )}
          </li>
        ))}
        <li>
          <div className="word-item">
            <input
              type="text"
              value={newWord}
              onChange={(e) => setNewWord(e.target.value)}
              placeholder={`New ${title.slice(0, -1)}`}
            />
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              placeholder="Description"
            />
            <button onClick={handleAdd}>Add</button>
          </div>
        </li>
        
      </ul>
    </div>
    
  );
};
const Editlistmodel = () => {
  // Your existing code for sampleStories and other functions
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
  ];

  const [stories, setStories] = useState(sampleStories);

  const handleDeleteItem = (storyIndex, listType, itemIndex) => {
    const updatedStories = [...stories];
    updatedStories[storyIndex][listType] = updatedStories[storyIndex][listType].filter((_, index) => index !== itemIndex);
    setStories(updatedStories);
  };

  const handleAddItem = (storyIndex, listType, newItem) => {
    const updatedStories = [...stories];
    updatedStories[storyIndex][listType] = [...updatedStories[storyIndex][listType], newItem];
    setStories(updatedStories);
  };

  const handleUpdate = (editingIndex, listType, updatedItem) => {
    const updatedStories = [...stories];
    updatedStories[0][listType][editingIndex] = updatedItem; // Its okay to have 0 as the index for now, this will change when modal is hooked to the site
    setStories(updatedStories);
  };


  return (
    <div className="popup-container">
      <div className="popup">
        <h1>Edit stories</h1>
        {stories.map((story, index) => (
          <div key={index} className="main-box">
            <h2>{story.title}</h2>
            <div className="box-container">
              <EditableWordList
                title="Nouns"
                items={story.nouns}
                onUpdate={handleUpdate}
                onAdd={(newItem) => handleAddItem(index, 'nouns', newItem)}
                onDelete={(itemIndex) => handleDeleteItem(index, 'nouns', itemIndex)}
              />
              <EditableWordList
                title="Verbs"
                items={story.verbs}
                onUpdate={handleUpdate}
                onAdd={(newItem) => handleAddItem(index, 'verbs', newItem)}
                onDelete={(itemIndex) => handleDeleteItem(index, 'verbs', itemIndex)}
              />
              
            </div>
            <button onClick={() => console.log('')}>Save</button> 
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default Editlistmodel;