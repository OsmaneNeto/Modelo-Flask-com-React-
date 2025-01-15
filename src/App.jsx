import React, { useEffect, useState } from 'react';
import './App.css';
import DataFetcher from './DataFetcher';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/message')
      .then(response => response.json())
      .then(data => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message ? message : 'Loading message...'}</h1>
      <div>
            <DataFetcher />
        </div>
    </div>
  );
}

export default App;
