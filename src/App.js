import React from 'react';
import WeatherLocation from "./components/WeatherLocation/index"
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <WeatherLocation></WeatherLocation>

      </header>
    </div>
  );
}

export default App;
