import '../styles/ParseClear.css';

function ParseButton(){
  return(
    <button> Parse</button>
  );
}

function ClearButton(){
  return(
    <button> Clear</button>
  );
}


function ParseClear() {
  return (
    <div>
     <h2> 
    <div className='buttons'> <ParseButton /> 
    <ClearButton /> </div>
    </h2>
    </div>
  );
}

export default ParseClear;
