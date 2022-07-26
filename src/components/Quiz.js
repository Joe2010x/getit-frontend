import React, { useEffect, useState } from 'react';
import Question from './Question';
import ProgressBar from './ProgressBar';
import './Quiz.css';

const Quiz = ({ userId, handleView, quizId }) => {
  const [quiz, setQuiz] = useState(null);
  const [question, setQuestion] = useState(null);
  const [questionBtnText, setQuestionBtnText] = useState('Next');
  const [questionCounter, setQuestionCounter] = useState(0);
  let userOptionId = null;

  const handleClickOption = (quizid, questionId, optionId) => {
    userOptionId = optionId;
  };

  const handleNext = (e, questionId) => {
    e.preventDefault();
    if (quiz.questions[quiz.questions.length - 1].id === questionId) {
      handleView('result');
    } else {
      if (quiz.questions[quiz.questions.length - 2].id === questionId) setQuestionBtnText('Finish');
      const thisQuestion = quiz.questions.find(q => q.id === questionId + 1);
      setQuestionCounter(questionCounter + 1);
      setQuestion(thisQuestion);
    }

    fetch('https://getit-app.azurewebsites.net/api/Results', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ userId, optionId: userOptionId }),
    })
      .then(response => response.json());
    // .catch(err => console.log(err.message));
  };

  useEffect(() => {
    fetch(`https://getit-app.azurewebsites.net/api/Quizzes/${quizId}`)
      .then(response => response.json())
      .then(json => { setQuiz(json); setQuestion(json.questions[0]); });
    // .catch(err => console.log(err.message));
  }, []);

  return (
    <div className="quiz__container">
      {(quiz) && <h2 className="quiz__title">{quiz.title}</h2>}
      {(question) && (
        <>
          <ProgressBar questionPercentage={`${Math.round((100 * questionCounter) / quiz.questions.length)}%`} />
          <Question
            key={question.text}
            question={question}
            quizId={quiz.id}
            handleNext={handleNext}
            questionBtnText={questionBtnText}
            handleClick={
              (questionId, optionId) => handleClickOption(quiz.id, questionId, optionId)
            } />
        </>
      )}
    </div>
  );
};

export default Quiz;
