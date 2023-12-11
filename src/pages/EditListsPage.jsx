import {useQuery} from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function EditListsPage(props) {
    let story;

    const parseDesc = async () => {
		const res = await fetch('http://localhost:5000/parse', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json','Accept':'application/json' },
            body: JSON.stringify({
                story: props.storyDesc,
                main_noun: ''
            })
        })
        .catch((error) => {
            console.error(error);
        });
        
        const nounsVerbsObj = await res.json();
		return nounsVerbsObj;
	};

    const { isLoading, error, data } = useQuery('nouns', parseDesc);

    const handleSaveClick = () => {
        props.setStories([...props.stories, story[0]]);
        props.setIsStorySaved(true);
    }

    if (error) return <div>Request Failed, please refresh the page.</div>;
	if (isLoading) return (
    <div>
        <Box sx={{ 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            <CircularProgress />
        </Box>
    </div>
    );

    data.nouns.map((item) => {
        const nounsArr = [];
        const verbsArr = [];

        if (item !== null) {
            for (let i = 0; i < item['associated_nouns'].length; i++) {
                nounsArr.push({word: item['associated_nouns'][i], description: ''});
            }

            for (let i = 0; i < item['associated_verbs'].length; i++) {
                verbsArr.push({word: item['associated_verbs'][i], description: ''});
            }

            story = [{
                title: props.storyTitle,
                nouns: nounsArr,
                verbs: verbsArr
            }]
        }

        return null;
    })

    return (
        <div>
            {story.map((element) => {
                return (
                    <>
                        <h1>nouns</h1>
                        {element.nouns.map((list) => {
                            return (
                                <>
                                    <h2>{list.word}</h2>
                                </>
                            )
                        })}
                        <h1>verbs</h1>
                        {element.verbs.map((list) => {
                            return (
                                <>
                                    <h2>{list.word}</h2>
                                </>
                            )
                        })}
                    </>
                )
            })}
            <button
            onClick={handleSaveClick}
            className='btn'
            >
                Save
            </button>
        </div>
    );
}

export default EditListsPage;
