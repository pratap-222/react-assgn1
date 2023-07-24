import React from 'react';

const DisplayPage = ({ username }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <p>This is the Display Page.</p>
    </div>
  );
};

export default DisplayPage;
