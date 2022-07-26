import React, { useState } from 'react';
import Option from './Option';
import './Question.css';

const Question = ({
  question, quizId, handleClick, handleNext, questionBtnText,
}) => {
  const [isActive, setIsActive] = useState(0);

  const handleChangeOptionId = id => {
    setIsActive(id);
  };

  return (
    <div className="question__container">
      <h3 className="question__title">
        {question.text}
      </h3>
      <form>
        {question.options.map(option => (
          <Option
            key={option.id}
            option={option}
            questionId={question.id}
            quizId={quizId}
            isActive={isActive}
            handleChangeOptionId={handleChangeOptionId}
            handleClick={optionId => handleClick(question.id, optionId)} />
        ))}
        <button className="question__btn" type="submit" onClick={e => handleNext(e, question.id)} disabled={(isActive === 0)}>{questionBtnText}</button>
      </form>
    </div>
  );
};

export default Question;
