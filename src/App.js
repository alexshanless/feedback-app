import './App.css';
import Header from './components/Header.jsx';
import { useState } from 'react';
import FeedbackData from './data/FeedBackData';
import FeedBackList from './components/FeedBackList';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };
  return (
    <>
      <Header />
      <div className='container'>
        <FeedbackForm />
        <FeedBackList feedback={feedback} deleteItem={deleteFeedback} />
      </div>
    </>
  );
}

export default App;
