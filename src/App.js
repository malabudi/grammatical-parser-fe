import './App.css';
import HowItWorks from './components/HowItWorks';
import UserStoryInput from './components/UserStoryInput';
import ParseClear from './components/ParseClear';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>Main Page</h1>
      <br></br>
      <HowItWorks />
      <br></br>
      <UserStoryInput />
      <br></br>
      <ParseClear />
      <br></br>
      <Footer />
    </div>
  );
}

export default App;
