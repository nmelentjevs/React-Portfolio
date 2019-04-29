import React from 'react';
import './App.css';

// components

import Main from './components/pages/Main';
require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
