import React from 'react';
import './App.css';
require('dotenv').config();

// components

import Main from './components/pages/Main';

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
