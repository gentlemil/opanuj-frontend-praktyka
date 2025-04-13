import { useState } from 'react';
import { add, subtract, multiply, division } from './functions';

const App = () => {
  const [firstVariable, setFirstVariable] = useState<number>(0);
  const [secondVariable, setSecondVariable] = useState<number>(0);
  const [result, setResult] = useState<number>(0);

  const myResult = (value: number): string | number => {
    if (isNaN(value)) {
      return 'Cannot divide by zero';
    } else if (typeof value === 'number') {
      return value;
    } else {
      return 'Other error';
    }
  };

  const calculate = (operation: (var1: number, var2: number) => number) => {
    setResult(operation(firstVariable, secondVariable));
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-4">
        <input
          type="number"
          step=".01"
          className="rounded-md shadow-md p-4"
          value={firstVariable}
          onChange={(e) => setFirstVariable(parseFloat(e.target.value))}
        />
        <input
          type="number"
          step=".01"
          className="rounded-md shadow-md p-4"
          value={secondVariable}
          onChange={(e) => setSecondVariable(parseFloat(e.target.value))}
        />
      </div>
      <div className="grid grid-cols-4 gap-x-4 my-4">
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => calculate(add)}
        >
          +
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => calculate(subtract)}
        >
          -
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => calculate(multiply)}
        >
          *
        </button>
        <button
          className="bg-blue-200 px-2 py-4 text-lg hover:bg-blue-500 hover:text-white rounded-md"
          onClick={() => calculate(division)}
        >
          /
        </button>
      </div>
      <div>Result: {myResult(result)}</div>
    </div>
  );
};

export default App;
