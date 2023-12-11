import '../styles/editmodel.css';
import React, { useState } from 'react';

const EditableWordList = ({ title, items, onUpdate, onAdd, onDelete }) => {
  const [newWord, setNewWord] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleAdd = () => {
    if (newWord.trim() !== '') {
      onAdd({ word: newWord, description: newDescription });
      setNewWord('');
      setNewDescription('');
    }
  };

  const handleUpdate = (index, updatedItem) => {
    onUpdate(index, updatedItem);
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
            <div>
              <span>
                <strong>{item.word}</strong>: {item.description}
              </span>
              <button onClick={() => handleDelete(index)}>-</button>
            </div>
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

  const handleUpdate = (storyIndex, listType, updatedItem) => {
    const updatedStories = [...stories];
    updatedStories[storyIndex][listType] = updatedStories[storyIndex][listType].map((item, index) =>
      index === updatedItem.index ? updatedItem.data : item
    );
    setStories(updatedStories);
  };

  return (
    <div className="popup-container">
      <div className="popup">
        <h1>Edity s</h1>
        {stories.map((story, index) => (
          <div key={index} className="main-box">
            <h2>{story.title}</h2>
            <div className="box-container">
              <EditableWordList
                title="Nouns"
                items={story.nouns}
                onUpdate={(updatedItem) => handleUpdate(index, 'nouns', updatedItem)}
                onAdd={(newItem) => handleAddItem(index, 'nouns', newItem)}
                onDelete={(itemIndex) => handleDeleteItem(index, 'nouns', itemIndex)}
              />
              <EditableWordList
                title="Verbs"
                items={story.verbs}
                onUpdate={(updatedItem) => handleUpdate(index, 'verbs', updatedItem)}
                onAdd={(newItem) => handleAddItem(index, 'verbs', newItem)}
                onDelete={(itemIndex) => handleDeleteItem(index, 'verbs', itemIndex)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Editlistmodel;


///////////////////////////////
/////////////
/
/////



import '../styles/editmodel.css';
import React, { useState } from 'react';



const EditableWordList = ({ title, items, onUpdate, onAdd, onDelete }) => {
  const [newWord, setNewWord] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editableIndex, setEditableIndex] = useState(null);

  const handleDeleteItem = (index) => {
    onDelete(index);
  };

  const handleAddItem = () => {
    onAdd({ word: newWord, description: newDescription });
    setNewWord('');
    setNewDescription('');
  };

  const handleUpdate = (index, updatedItem) => {
    onUpdate(index, updatedItem);
    setEditableIndex(null);
  };

  const handleItemClick = (index) => {
    setEditableIndex(index);
  };

  return (
    <div className="popup">
      <h3>{title}</h3>
      <ul className="word-list">
        {items.map((item, index) => (
          <li key={index} className="word-item">
            {editableIndex === index ? (
              <div>
                <input
                  type="text"
                  defaultValue={item.word}
                  onChange={(e) => setNewWord(e.target.value)}
                />
                <input
                  type="text"
                  defaultValue={item.description}
                  onChange={(e) => setNewDescription(e.target.value)}
                />
                <button onClick={() => handleUpdate(index, { word: newWord, description: newDescription })}>
                  Update
                </button>
              </div>
            ) : (
              <div onClick={() => handleItemClick(index)}>
                <span>
                  <strong>{item.word}</strong>: {item.description}
                </span>
                <button onClick={() => handleDeleteItem(index)}>-</button>
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
            <button onClick={handleAddItem}>Add</button>
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

  const handleUpdate = (storyIndex, listType, updatedItem) => {
    const updatedStories = [...stories];
    updatedStories[storyIndex][listType] = updatedStories[storyIndex][listType].map((item, index) =>
      index === updatedItem.index ? updatedItem.data : item
    );
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
                onUpdate={(updatedItem) => handleUpdate(index, 'nouns', updatedItem)}
                onAdd={(newItem) => handleAddItem(index, 'nouns', newItem)}
                onDelete={(itemIndex) => handleDeleteItem(index, 'nouns', itemIndex)}
              />
              <EditableWordList
                title="Verbs"
                items={story.verbs}
                onUpdate={(updatedItem) => handleUpdate(index, 'verbs', updatedItem)}
                onAdd={(newItem) => handleAddItem(index, 'verbs', newItem)}
                onDelete={(itemIndex) => handleDeleteItem(index, 'verbs', itemIndex)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Editlistmodel;


////////////
////////
/////////
////////
//////




import '../styles/editmodel.css';
import React, { useState } from 'react';

const EditableWordList = ({ title, items, onUpdate, onAdd, onDelete }) => {
  const [newWord, setNewWord] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [editableIndex, setEditableIndex] = useState(null);
  const [editWord, setEditWord] = useState('');  // New state for tracking editing word
  const [editDescription, setEditDescription] = useState('');  // New state for tracking editing description

  const handleDeleteItem = (index) => {
    onDelete(index);
  };

  const handleAddItem = () => {
    onAdd({ word: newWord, description: newDescription });
    setNewWord('');
    setNewDescription('');
  };

  const handleUpdate = (index, updatedItem) => {
    onUpdate(index, updatedItem);
    setEditableIndex(null);
  };

  const handleItemClick = (index) => {
    setEditableIndex(index);
    // Set initial values for editing
    setEditWord(items[index].word);
    setEditDescription(items[index].description);
  };

  return (
    <div className="popup">
      <h3>{title}</h3>
      <ul className="word-list">
        {items.map((item, index) => (
          <li key={index} className="word-item">
            {editableIndex === index ? (
              <div>
                <input
                  type="text"
                  value={editWord}  // Use the new state value here
                  onChange={(e) => setEditWord(e.target.value)}  // Update the new state on change
                />
                <input
                  type="text"
                  value={editDescription}  // Use the new state value here
                  onChange={(e) => setEditDescription(e.target.value)}  // Update the new state on change
                />
                <button onClick={() => handleUpdate(index, { word: editWord, description: editDescription })}>
                  Update
                </button>
              </div>
            ) : (
              <div onClick={() => handleItemClick(index)}>
                <span>
                  <strong>{item.word}</strong>: {item.description}
                </span>
                <button onClick={() => handleDeleteItem(index)}>-</button>
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
            <button onClick={handleAddItem}>Add</button>
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

  const handleUpdate = (storyIndex, listType, updatedItem) => {
    const updatedStories = [...stories];
    updatedStories[storyIndex][listType] = updatedStories[storyIndex][listType].map((item, index) =>
      index === updatedItem.index ? updatedItem.data : item
    );
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
                onUpdate={(updatedItem) => handleUpdate(index, 'nouns', updatedItem)}
                onAdd={(newItem) => handleAddItem(index, 'nouns', newItem)}
                onDelete={(itemIndex) => handleDeleteItem(index, 'nouns', itemIndex)}
              />
              <EditableWordList
                title="Verbs"
                items={story.verbs}
                onUpdate={(updatedItem) => handleUpdate(index, 'verbs', updatedItem)}
                onAdd={(newItem) => handleAddItem(index, 'verbs', newItem)}
                onDelete={(itemIndex) => handleDeleteItem(index, 'verbs', itemIndex)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Editlistmodel;