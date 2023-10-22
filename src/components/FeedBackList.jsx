import { useContext } from 'react';
import FeedBackItem from './FeedBackItem';
import FeedbackStats from './FeedbackStats';
import FeedbackContext from '../context/FeedbackContext';

function FeedBackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);
  if (!isLoading && (!feedback || feedback.lentgh === 0)) {
    return <p>No Feedback</p>;
  }

  return isLoading ? (
    <h3>Is Loading</h3>
  ) : (
    <div>
      <FeedbackStats feedback={feedback} />

      {feedback.map(item => (
        <FeedBackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedBackList;
