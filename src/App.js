import './App.css';
import Footer from './components/Footer';
import {QueryClient, QueryClientProvider} from 'react-query';
import ParsePage from './pages/ParsePage';
import { useState } from 'react';
import EditListsPage from './pages/EditListsPage';
import ReportPage from './components/reportpage';

function App() {
  const queryClient = new QueryClient();

  const [storyDesc, setStoryDesc] = useState('');
  const [isParsed, setIsParsed] = useState(false);

  const handleClick = () => {
    setIsParsed(true)
  }

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {!isParsed &&
          <>
            <h1>Main Page</h1>
            <ParsePage 
              setStoryDesc={setStoryDesc}
            />
            <button onClick={handleClick}/>
            <Footer />
          </>
        }
        {isParsed &&
          <>
            <h1>Main Page</h1>
            <EditListsPage
              storyDesc={storyDesc}
            />
            <Footer />
          </>
        }
      </div>
		</QueryClientProvider>
  );
}

export default App;
