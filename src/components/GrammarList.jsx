import '../styles/GrammarList.css';
import Divider from '@mui/material/Divider';

function GrammarList(props) {
  return (
    <div className='ListContainer'>
      <div className = 'List NounList'>
        <h2>Nouns:</h2>
        {props.nouns.map((element, i) => {
          return (
            <>
              <Divider variant="middle" />
              <p key={i}><strong>{element.word}:</strong> {element.description}</p>
            </>
          )
        })}
      </div>
      <div className= 'List VerbList'>
        <h2>Verbs:</h2>
        {props.verbs.map((element, i) => {
          return (
            <>
              <Divider />
              <p key={i}><strong>{element.word}:</strong> {element.description}</p>
            </>
          )
        })}
      </div>
    </div>
  );
}

export default GrammarList;
