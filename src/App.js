import './App.css';
import Header from './components/Header.jsx';
import { useState } from 'react';
import FeedbackData from './data/FeedBackData';
import FeedBackList from './components/FeedBackList';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header />
      <div className='container'>
        <FeedBackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
