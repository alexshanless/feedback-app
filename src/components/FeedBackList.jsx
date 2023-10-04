import FeedBackItem from './FeedBackItem';
import FeedbackStats from './FeedbackStats';

function FeedBackList({ feedback, deleteItem }) {
  if (!feedback || feedback.lentgh === 0) {
    return <p>No Feedback</p>;
  }
  return (
    <div>
      <FeedbackStats feedback={feedback} />

      {feedback.map(item => (
        <FeedBackItem key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </div>
  );
}

export default FeedBackList;
