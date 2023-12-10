import HowItWorks from '../components/HowItWorks';
import UserStoryInput from '../components/UserStoryInput';
import ParseClear from '../components/ParseClear';
import Divider from '@mui/material/Divider';

function ParsePage(props) {

    return (
        <div>
            <br></br>
            <HowItWorks />
            <Divider variant="middle" />
            <br />
            <UserStoryInput 
                setStoryTitle={props.setStoryTitle} 
                setStoryDesc={props.setStoryDesc} 
                setStorySubj={props.setStorySubj} 
                storyTitle={props.storyTitle}
                storyDesc={props.storyDesc}
                storySubj={props.storySubj}
            />
            <ParseClear
                setStoryTitle={props.setStoryTitle} 
                setStoryDesc={props.setStoryDesc} 
                setStorySubj={props.setStorySubj} 
                setIsParsed={props.setIsParsed}
                storyTitle={props.storyTitle}
                storyDesc={props.storyDesc}
            />
            <br></br>
        </div>
    );
}

export default ParsePage;
