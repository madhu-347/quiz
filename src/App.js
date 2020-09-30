import React from 'react';
import LeftPane from './components/LeftPane/LeftPane';
import RightPane from './components/RightPane/RightPane';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className = 'left-pane'>
        <LeftPane />
      </div>
      <div  className = 'right-pane'>
        <RightPane />
      </div>
    
    </div>
  );
}

export default App;
