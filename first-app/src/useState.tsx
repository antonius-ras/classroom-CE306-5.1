import React, { useState } from 'react';
import './useState.css'


const Counter: React.FC = () => {

    const [count, setCount] = useState<number>(0);

    const increment = () => {
        setCount(prevCount => prevCount + 1);
        return () => { };
    };

    const decrement = () => {
        setCount(prevCount => prevCount - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <h1>Counter Exercise-Solution</h1>
            <h1 id="counter" className="count-number" >{count}</h1>
            <button onClick={increment}>+ เพิ่ม</button>
            <button onClick={decrement}>- ลด</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Counter;