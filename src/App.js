import './App.css';
//import Footer from './components/Footer';
import {QueryClient, QueryClientProvider} from 'react-query';
import ParsePage from './pages/ParsePage';
import { useState } from 'react';
import EditListsPage from './pages/EditListsPage';
import ReportPage from './components/reportpage';
import Navbar from './components/Navbar';
import Container from '@mui/material/Container';

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
        <Container 
          maxWidth="md" 
          sx={{
            zIndex: '1',
            backgroundColor: 'white',
            paddingTop: '3rem',
            minHeight: '90vh',
            boxShadow: 'rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px'
          }}
        >
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
        </Container>
      </div>
		</QueryClientProvider>
  );
}

export default App;
