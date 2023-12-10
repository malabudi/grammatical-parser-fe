import '../styles/ParseClear.css';

function ParseButton(props) {

  return(
    <button
      onClick={() => (props.setIsParsed(true))}
      disabled={props.storyTitle === '' || props.storyDesc === ''}
    >
      Parse
    </button>
  );
}

function ClearButton(props) {
  const clearFields = () => {
    props.setStoryTitle('');
    props.setStoryDesc('');
    props.setStorySubj('');
  }

  return(
    <button
      onClick={clearFields}
    >
      Clear
    </button>
  );
}


function ParseClear(props) {
  return (
    <div>
      <h2> 
        <div className='buttons'>
          <ParseButton
            setIsParsed={props.setIsParsed}
            storyTitle={props.storyTitle} 
            storyDesc={props.storyDesc} 
          /> 
          <ClearButton
            setStoryTitle={props.setStoryTitle} 
            setStoryDesc={props.setStoryDesc} 
            setStorySubj={props.setStorySubj} 
          />
        </div>
      </h2>
    </div>
  );
}

export default ParseClear;
