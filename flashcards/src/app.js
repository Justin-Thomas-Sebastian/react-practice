import { useState } from "react";

const data = [
    {
        id: 1,
        question: "What is React and why is it used?",
        answer: "React is a JavaScript library for building user interfaces. It simplifies UI development by using a declarative and component-based approach.",
        isFlipped: false,
    },
    {
        id: 2,
        question: "Explain the concept of JSX in React.",
        answer: "JSX is a syntax extension for JavaScript used in React. It allows embedding HTML-like code in JavaScript for more readable UI components.",
        isFlipped: false,
    },
    {
        id: 3,
        question: "What is the significance of virtual DOM in React?",
        answer: "The virtual DOM optimizes performance by updating only necessary parts of the actual DOM, reducing rendering time.",
        isFlipped: false,
    },
    {
        id: 4,
        question: "Describe the role of state and props in React components",
        answer: "State represents internal mutable data in a component, while props are immutable properties passed from parent to child components.",
        isFlipped: true,
    },
    {
        id: 5,
        question: "What are React hooks, and why were they introduced?",
        answer: "React hooks are functions introduced in React 16.8 for using state and other features in functional components, offering a concise alternative to class components.",
        isFlipped: false,
    },
    {
        id: 6,
        question: "Explain the purpose of the useEffect hook in React",
        answer: "useEffect manages side effects in functional components, like data fetching or DOM manipulation, after rendering to keep the component lifecycle organized.",
        isFlipped: true,
    },
];

export default function App() {
    return <Deck />;
}

function Deck() {
    return (
        <div>
            <ul className="deck">
                {data.map((card) => (
                    <Card card={card} key={card.id}></Card>
                ))}
            </ul>
        </div>
    );
}

function Card({ card }) {
    const [isFlipped, setIsFlipped] = useState(card.isFlipped);
    function handleClick() {
        setIsFlipped(!isFlipped);
    }

    return (
        <>
            {isFlipped ? (
                <li className="card answer" onClick={handleClick}>
                    <p>Answer: {card.answer}</p>
                </li>
            ) : (
                <li className="card question" onClick={handleClick}>
                    <p>Question: {card.question}</p>
                </li>
            )}
        </>
    );
}
