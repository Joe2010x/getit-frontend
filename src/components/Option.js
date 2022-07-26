import React from 'react';
import './Option.css';

const Option = ({
  option, handleClick, isActive, handleChangeOptionId,
}) => {
  const handleClickOption = () => {
    handleClick(option.id);
    handleChangeOptionId(option.id);
  };

  return (
    <div className={`option__container ${(isActive === option.id) ? 'option--active' : ''}`} role="presentation" onClick={handleClickOption}>
      <input className="option__input" id={option.id} type="radio" name="answers" />
      <label htmlFor={option.id}><span>{option.text}</span></label>
    </div>
  );
};

export default Option;
