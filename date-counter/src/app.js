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
        <div>
            <div>
                <button onClick={decreaseStep}>-</button>
                <span> Step: {step} </span>
                <button onClick={increaseStep}>+</button>
            </div>
            <div>
                <button onClick={decreaseCount}>-</button>
                <span> Count: {count} </span>
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
        </div>
    );

    function decreaseStep() {
        if (step > 1) {
            setStep((s) => s - 1);
        }
    }

    function increaseStep() {
        setStep((s) => s + 1);
    }

    function decreaseCount() {
        setCount((c) => c - step);
    }
    function increaseCount() {
        setCount((c) => c + step);
    }
}
