'use client';
import React, { useState } from 'react';

interface CounterProps {
  initialValue?: number;
}

const CounterModule: React.FC<CounterProps> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = (): void => setCount(count + 1);
  const decrement = (): void => setCount(count - 1);
  const reset = (): void => setCount(initialValue);

  return (
    <div className="counter" data-testid="counter-component">
      <h2>Counter: {count}</h2>
      <div>
        <button 
          onClick={decrement}
          data-testid="decrement-button"
          className="px-4 py-2 mr-2 bg-red-500 text-white rounded"
        >
          -
        </button>
        <button 
          onClick={increment}
          data-testid="increment-button"
          className="px-4 py-2 mr-2 bg-green-500 text-white rounded"
        >
          +
        </button>
        <button 
          onClick={reset}
          data-testid="reset-button"
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default CounterModule;