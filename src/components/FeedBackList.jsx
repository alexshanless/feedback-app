import FeedBackItem from './FeedBackItem';

function FeedBackList({ feedback, deleteItem }) {
  if (!feedback || feedback.lentgh === 0) {
    return <p>No Feedback</p>;
  }
  return (
    <div>
      {feedback.map(item => {
        return (
          <FeedBackItem key={item.id} item={item} deleteItem={deleteItem} />
        );
      })}
    </div>
  );
}

export default FeedBackList;
