import {useQuery} from 'react-query';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function EditListsPage(props) {
    /*As a database administrator, I want to back up our data daily so that we can recover information in case of data loss.*/

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

    return (
        <div>
            {data.nouns.map((item) => {
                return (
                <div>
                    <h1>{item.associated_nouns}</h1>
                    <h1>{item.associated_verbs}</h1>
                </div>
                );
            })}
        </div>
    );
}

export default EditListsPage;
