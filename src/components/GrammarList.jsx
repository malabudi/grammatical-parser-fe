import '../styles/GrammarList.css';


function GrammarList() {
  return (
    <div className='ListContainer'>
      <div
        className = 'NounList'>
          Noun:
           <div>*Analyze the grammatical structure</div>
          <div>*Understand the grammatical structure</div>
          <div>*Easily input a new sentence</div>
          </div>

         

        <div className= 'VerbList'>
          Verb:
          <div>*Input a sentence into parser</div>
  <div>*See the Parsed results displayed on interface</div>
  <div>*Option to clear the input field and parsing results </div>
          </div>

        
    </div>
 

  );

}

export default GrammarList;
