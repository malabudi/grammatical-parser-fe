import '../styles/UserStoryInput.css';

function UserStoryInput() {
  return (
    <div className='story-input'>
      <div>
        <div className="story-title">
          <label for="storyTitle">Story Title: </label>
          <input type="text" id="storyTitle" name="storyTitle" placeholder="Enter Story Title" />
        </div>
        <div className='story-desc'>
          <label for="storyDesc">Story Description: </label>
          <textarea 
          rows="6" 
          cols="55"
          type="text" 
          id="storyDesc" 
          name="storyDesc" 
          placeholder="Enter Story Description To Be Parsed"/>
        </div>
      </div>
    </div>
  );
}

export default UserStoryInput;
