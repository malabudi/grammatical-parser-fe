import HowItWorks from '../components/HowItWorks';
import UserStoryInput from '../components/UserStoryInput';
import ParseClear from '../components/ParseClear';

function ParsePage(props) {

    return (
        <div>
            <br></br>
            <HowItWorks />
            <br></br>
            <UserStoryInput 
                setStoryDesc={props.setStoryDesc} 
            />
            <br></br>
            <ParseClear />
            <br></br>
        </div>
    );
}

export default ParsePage;
