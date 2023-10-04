import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header.jsx';
import { useState } from 'react';
import FeedbackData from './data/FeedBackData';
import FeedBackList from './components/FeedBackList';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './components/pages/AboutPage';

function App() {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };

  const addFeedback = newFeedback => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  return (
    <Router>
      <Header />
      <div className='container'>
        <Routes>
          <Route
            exact
            path='/'
            element={
              <>
                <FeedbackForm handleAdd={addFeedback} />
                <FeedBackList feedback={feedback} deleteItem={deleteFeedback} />
              </>
            }
          ></Route>
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
