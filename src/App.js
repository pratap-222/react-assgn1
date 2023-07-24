import React, { useState } from 'react';
import Login from './Login';
import DisplayPage from './Display';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (username, password) => {
    if (username.trim() !== '') {
      setIsLoggedIn(true);
      setUsername(username);
    }
  };

  return (
    <div>
      {isLoggedIn ? (
        <DisplayPage username={username} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;

