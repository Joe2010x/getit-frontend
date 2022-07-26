import React, { useState, useEffect } from 'react';
import QuestionResult from './QuestionResult';
import './Result.css';

const Result = ({ userId, quizId }) => {
  const [userResult, setUserResult] = useState(null);
  const [isOpen, setIsOpen] = useState('');

  const handleIsOpen = questionText => {
    setIsOpen(questionText);
  };

  useEffect(() => {
    fetch(`https://localhost:7017/api/Users/${userId}/quizzes/${quizId}`)
      .then(response => response.json())
      .then(json => setUserResult(json));
    // .catch(err => console.log(err.message));
  }, []);

  return (
    <>
      {(userResult) && (
        <div className="userResult__container">
          <h1>{userResult.quizTitle}</h1>
          <h2>{userResult.username}</h2>
          <div className="userResult__scoreContainer">
            <h3>
              Your score:
              <span className="userResult__score">{`${userResult.score}%`}</span>
            </h3>
          </div>
          {userResult.questions.map(question => (
            <QuestionResult
              question={question}
              isOpen={isOpen}
              handleIsOpen={handleIsOpen} />
          ))}
        </div>
      )}
    </>
  );
};

export default Result;
