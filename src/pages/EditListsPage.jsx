import {useQuery} from 'react-query';

function EditListsPage(props) {
    /*As a database administrator, I want to back up our data daily so that we can recover information in case of data loss. */

    const parseDesc = async () => {
		const res = await fetch('http://localhost:5000/parse', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'applications/json'
            },
            body: JSON.stringify(props.storyDesc)
        });
        const nounsVerbsObj = await res.json();
		return nounsVerbsObj;
	};

    const {data, error, isLoading} = useQuery('nouns', parseDesc);

    if (error) return <div>Request Failed</div>;
	if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            {data}
        </div>
    );
}

export default EditListsPage;
