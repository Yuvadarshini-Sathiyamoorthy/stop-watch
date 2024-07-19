
import React, { useState, useRef } from 'react';
import './StopWatch.css';

function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    }
  };

  const pauseTimer = () => {
    setRunning(false);
    clearInterval(timerRef.current);
  };

  const stopTimer = () => {
    setRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  return (
    <div className="App">
      <h1>TIME TRICKSTER</h1>
      <div className="card">
        <h2>Loki’s Ticker</h2>
        <div className="time">
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + (time / 10) % 100).slice(-2)}</span>
        </div>
        <div className="buttons">
          <button onClick={startTimer} disabled={running}>Start</button>
          <button onClick={pauseTimer} disabled={!running}>Stop</button>
          <button onClick={stopTimer}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;