import FeedBackItem from './FeedBackItem';

function FeedBackList({ feedback }) {
  return (
    <div>
      {feedback.map(item => {
        return <FeedBackItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default FeedBackList;
