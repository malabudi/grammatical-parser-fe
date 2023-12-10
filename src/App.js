import './App.css';
import Footer from './components/Footer';
import {QueryClient, QueryClientProvider} from 'react-query';
import ParsePage from './pages/ParsePage';
import { useState } from 'react';
import EditListsPage from './pages/EditListsPage';
//import ReportPage from './components/reportpage';

function App() {
  const queryClient = new QueryClient();

  const [storyTitle, setStoryTitle] = useState('');
  const [storyDesc, setStoryDesc] = useState('');
  const [storySubj, setStorySubj] = useState('');
  const [isParsed, setIsParsed] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        {!isParsed &&
          <>
            <h1>Main Page</h1>
            <ParsePage
              setStoryTitle={setStoryTitle}
              setStoryDesc={setStoryDesc}
              setStorySubj={setStorySubj}
              setIsParsed={setIsParsed}
              storyTitle={storyTitle}
              storyDesc={storyDesc}
              storySubj={storySubj}
            />
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
