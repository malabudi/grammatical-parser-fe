import '../styles/reportpage.css';
import TextField from '@mui/material/TextField';

function UserStoryInput() {

  return (
    <div className='story-input'>
      <TextField
      required
      id="standard-required"
      label="User Story Title"
      variant="filled"
      sx={{
        width: '600px',
        marginBottom: '20px'
      }}
      />
      <TextField
      required
      id="filled-multiline-static"
      label="User Story Description"
      multiline
      rows={4}
      variant="filled"
      sx={{
        width: '600px',
        marginBottom: '20px'
      }}
      />
      <TextField
      id="standard-required"
      label="Story Subject"
      variant="filled"
      className='text-input'
      helperText='Enter a noun that will be interacted with the most in the user story. This is to detect nouns more accurately'
      sx={{
        width: '600px',
        marginBottom: '20px'
      }}
      />
    </div>
  );
}

export default UserStoryInput;
