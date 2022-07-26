import React from 'react';
import './QuestionResult.css';

const QuestionResult = ({ question, isOpen, handleIsOpen }) => (
  <div className="result__question" key={question.text}>
    <details open={isOpen === question.text} onMouseDown={() => handleIsOpen(question.text)} role="presentation">
      <summary className="questionResult__question">
        <span className="questionResult__title">{question.text}</span>
        <span className="questionResult__icon">
          <i className={`fa-solid fa-circle-${question.isAnswerCorrect ? 'check' : 'xmark'}`} />
        </span>
      </summary>
      {question.options.map(option => (
        <div className={`questionResult__option ${(option.wasChosen) && 'questionResult--chosen'}`} key={option.text}>
          <p className="questionResult__optionText">{option.text}</p>
          <span className="questionResult__icon">
            <i className={`fa-solid fa-circle-${option.isCorrect ? 'check' : 'xmark'}`} />
          </span>
        </div>
      ))}
    </details>
  </div>
);

export default QuestionResult;
