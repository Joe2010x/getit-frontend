import React from 'react';
import './ProgressBar.css';

const ProgressBar = ({ questionPercentage }) => (
  <div className="progressbar__container">
    <div className="progressbar__progress" style={{ width: questionPercentage }}><span className="progressbar__percentage">{questionPercentage}</span></div>
  </div>
);

export default ProgressBar;
