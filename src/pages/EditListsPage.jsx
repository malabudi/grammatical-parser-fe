import '../styles/EditListsPage.css';
import {useQuery} from 'react-query';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import GrammarList from '../components/GrammarList';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function EditListsPage(props) {
    let story;

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '1px solid #000',
        boxShadow: 'rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px',
        borderRadius: '5px',
        p: 4
    };

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
        setNounsList(story[0].nouns);
        setVerbsList(story[0].verbs);
    }

    const handleEditClick = () => {
        handleOpen();
        setNounsList(story[0].nouns);
        setVerbsList(story[0].verbs);
    }

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // slap these sons of bitches into the modal DELETE THIS COMMMENT TOO DONT MERGE WITH IT
    const [nounsList, setNounsList] = useState([]);
    const [verbsList, setVerbsList] = useState([]);

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
        <div className='edit-page'>
            {story.map((element, i) => {
                return (
                    <GrammarList
                        key={i}
                        nouns={element.nouns}
                        verbs={element.verbs}
                    />
                )
            })}
            <div>
                <button
                onClick={handleSaveClick}
                className='btn'
                >
                    Save
                </button>
                <button
                onClick={handleEditClick}
                className='btn'
                >
                    Edit
                </button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modalStyle}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    Text in a modal
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default EditListsPage;
