import './App.css';
import Footer from './components/Footer';
import {QueryClient, QueryClientProvider} from 'react-query';
import ParsePage from './pages/ParsePage';
import { useState } from 'react';
import EditListsPage from './pages/EditListsPage';
import ReportPage from './components/reportpage';
import Navbar from './components/Navbar';

function App() {
  const queryClient = new QueryClient();

  const [stories, setStories] = useState([]);

  const [storyTitle, setStoryTitle] = useState('');
  const [storyDesc, setStoryDesc] = useState('');
  const [storySubj, setStorySubj] = useState('');

  const [isParsed, setIsParsed] = useState(false);
  const [isStorySaved, setIsStorySaved] = useState(false);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Navbar />
        {!isParsed &&
          <ParsePage
            setStoryTitle={setStoryTitle}
            setStoryDesc={setStoryDesc}
            setStorySubj={setStorySubj}
            setIsParsed={setIsParsed}
            storyTitle={storyTitle}
            storyDesc={storyDesc}
            storySubj={storySubj}
          />
        }
        {isParsed && !isStorySaved &&
          <EditListsPage
            setStories={setStories}
            setIsStorySaved={setIsStorySaved}
            stories={stories}
            storyTitle={storyTitle}
            storyDesc={storyDesc}
          />
        }
        {isStorySaved &&
          <ReportPage 
            stories={stories}
            setStoryTitle={setStoryTitle}
            setStoryDesc={setStoryDesc}
            setStorySubj={setStorySubj}
            setIsParsed={setIsParsed}
            setIsStorySaved={setIsStorySaved}
          />
        }
        <Footer />
      </div>
		</QueryClientProvider>
  );
}

export default App;
