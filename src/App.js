import React from 'react';
import { CounterProvider, useCounter } from './store';
import "./App.css"

function CounterDisplay() {
  const { state } = useCounter();

  return <div className="box"><span className="counter">Counter: {state.count}</span></div>;
}

function Controls() {
  const { dispatch } = useCounter();

  const handleIncrement = () => dispatch({ type: 'INCREMENT' });
  const handleDecrement = () => dispatch({ type: 'DECREMENT' });

  return (
    <div className="box buttons">
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Counter App</h1>
      <CounterProvider>
        <CounterDisplay />
        <Controls />
      </CounterProvider>
    </div>
  );
}

export default App;
