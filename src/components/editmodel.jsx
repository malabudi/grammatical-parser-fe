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
  };

  return (
    <div className="popup">
      <h3>{title}</h3>
      <ul className="word-list">
        {items.map((item, index) => (
          <li key={index} className="word-item">
            {editingIndex === index ? (
              <div className='edit-container'>
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
                <button className='save-editedwords-button' onClick={() => handleUpdate(index, title.toLowerCase())}>Save</button>
              </div>
            ) : (
              <div onClick={() => handleItemClick(index)}>
                <span className='editable-input'>
                  <strong>{item.word}</strong>: {item.description}
                </span>
                <smallbutton className='delete-button'
                onClick={() => handleDelete(index, title.toLowerCase())}>-</smallbutton>
              </div>
            )}
          </li>
        ))}
        <li>
          <div className="edit-container">
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
            <button className='save-editedwords-button' onClick={handleAdd}>Add</button>
          </div>
        </li>
        
      </ul>
    </div>
    
  );
};
const Editlistmodel = (props) => {
  const [stories, setStories] = useState(props.story);

  const handleDeleteItem = (storyIndex, listType, itemIndex) => {
    const updatedStories = [...stories];

    if (itemIndex === 0) {
      updatedStories[storyIndex][listType].shift();
    }
    else {
      updatedStories[storyIndex][listType].splice(itemIndex, itemIndex);
    }
    
    setStories(updatedStories);
  };

  const handleAddItem = (storyIndex, listType, newItem) => {
    const updatedStories = [...stories];
    updatedStories[storyIndex][listType] = [...updatedStories[storyIndex][listType], newItem];
    setStories(updatedStories);
  };

  const handleUpdate = (editingIndex, listType, updatedItem) => {
    const updatedStories = [...stories];
    updatedStories[0][listType][editingIndex] = updatedItem;
    setStories(updatedStories);
  };


  return (
    <div className="popup-container">
      <div className="popup">
        <h1>Edit Story</h1>
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
          </div>
        ))}
        <div className='modal-btn-container'>
          <button onClick={() => {
            props.closeModal();
            props.setCurStory([...stories]);
          }}
          className='btn modal-btn'
          >
              Save
          </button>
          <button onClick={() => {
            props.closeModal();
          }}
          className='btn modal-btn close-btn'
          >
              Exit
          </button> 
        </div>
      </div>
    </div>
  );
};

export default Editlistmodel;