import React from 'react';
import './App.css';
import JSONTree from './containers/JSONTree/JSONTree';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>JSON viewer</p>
        <JSONTree/>
      </header>
    </div>
  );
}

export default App;
