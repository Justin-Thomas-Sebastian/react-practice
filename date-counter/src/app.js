import { useState } from "react";

export default function App() {
    return (
        <div>
            <Counter />
        </div>
    );
}

function Counter() {
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);
    const date = new Date();
    date.setDate(date.getDate() + count);

    return (
        <div class="container">
            <div>
                <input
                    type="range"
                    min="1"
                    max="10"
                    value={step}
                    onChange={handleStep}
                ></input>
                <span> Step: {step} </span>
            </div>
            <div>
                <button onClick={decreaseCount}>-</button>
                <input
                    type="number"
                    value={count}
                    onChange={handleCount}
                ></input>
                <button onClick={increaseCount}>+</button>
            </div>

            <p>
                <span>
                    {count === 0
                        ? "Today is "
                        : count < 0
                        ? `${Math.abs(count)} day(s) ago: `
                        : `${Math.abs(count)} day(s) from now: `}
                </span>
                <span>{date.toDateString()}</span>
            </p>
            {count !== 0 || step !== 1 ? (
                <button onClick={handleReset}>reset</button>
            ) : null}
        </div>
    );

    function handleReset() {
        setStep(1);
        setCount(0);
    }

    function handleStep(e) {
        setStep(Number(e.target.value));
    }

    function handleCount(e) {
        setCount(Number(e.target.value));
    }

    function decreaseCount() {
        setCount((c) => c - step);
    }

    function increaseCount() {
        setCount((c) => c + step);
    }
}
