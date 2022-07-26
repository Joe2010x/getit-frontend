import React, { useState } from 'react';
import './Login.css';

const Login = ({ handleUsername, handleKeyDown }) => {
  const [username, setUsername] = useState('');
  return (
    <div className="login__container">
      <form>
        <input className="login__input" type="text" placeholder="Enter Username" onKeyDown={e => handleKeyDown(e, username)} onChange={e => setUsername(e.target.value)} />
        <button className="login__btn" type="button" onClick={e => handleUsername(e, username)}>Start Quiz</button>
      </form>
    </div>
  );
};

export default Login;
