import Button from './shared/Button';
import Card from './shared/Card';
import { useState } from 'react';

function FeedbackForm() {
  const [text, SetText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = e => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be at least 10 characters');
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    SetText(e.target.value);
  };

  return (
    <Card>
      <form action=''>
        <h2>How would rate your service with us?</h2>
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
