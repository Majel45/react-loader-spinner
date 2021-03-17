import React from "react";
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello from ReactJS</h1>
        <Weather city="Johannesburg"/>
      </header>
    </div>
  );
}

export default App;
