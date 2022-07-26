import './App.css';
import React, { useState } from 'react';
import Quiz from './components/Quiz';
import Login from './components/Login';
import Result from './components/Result';

function App() {
  const [view, setView] = useState('login');
  const [userId, setUserId] = useState(-1);
  const quizId = 1;

  const handleUsername = (e, username) => {
    e.preventDefault();
    fetch('https://getit-app.azurewebsites.net/api/Users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: username }),
    })
      .then(response => response.json())
      .then(json => setUserId(json.id))
      .then(() => setView('quiz'));
    // .catch(err => console.log(err.message));
  };

  const handleKeyDown = (e, username) => {
    if (e.key === 'Enter') {
      handleUsername(username);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="header__title">{'{ get; it; }'}</h1>
      </header>
      <main className="main__container">
        {(view === 'login') && <Login handleUsername={handleUsername} handleKeyDown={handleKeyDown} />}
        {(view === 'quiz') && <Quiz userId={userId} handleView={setView} quizId={quizId} />}
        {(view === 'result') && <Result quizId={quizId} userId={userId} />}
      </main>
      <footer className="App-footer">
        <p className="footer__title">{'Mobbydick, 2022, a part of </salt>'}</p>
      </footer>
    </div>
  );
}

export default App;
