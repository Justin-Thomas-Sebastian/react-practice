import { useState } from "react";

const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
    { id: 3, description: "Shoes", quantity: 2, packed: true },
    { id: 4, description: "Bags", quantity: 2, packed: false },
];

export default function App() {
    return (
        <div className="app">
            <Logo />
            <Form />
            <PackingList />
            <Stats />
        </div>
    );
}

function Logo() {
    return <h1>🏝️ Far Away 💼</h1>;
}
function Form() {
    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    function handleSubmit(e) {
        e.preventDefault();
        if (!description) return;

        const newItem = {
            id: Date.now(),
            description,
            quantity,
            packed: false,
        };

        console.log(newItem);
        setQuantity(1);
        setDescription("");
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <h3>What do you need for your trip?</h3>
            <select
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            >
                {Array.from(Array(20).keys(), (x) => x + 1).map((num) => (
                    <option value={num} key={num}>
                        {num}
                    </option>
                ))}
            </select>
            <input
                type="text"
                placeholder="Item..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            ></input>
            <button>Add</button>
        </form>
    );
}

function PackingList() {
    return (
        <div className="list">
            <ul>
                {initialItems.map((item) => (
                    <Item item={item} key={item.id} />
                ))}
            </ul>
        </div>
    );
}

function Item({ item }) {
    return (
        <li>
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
        </li>
    );
}

function Stats() {
    return (
        <footer className="stats">
            <em>
                You have X items in your list and you have already packed Y (Z
                %)
            </em>
        </footer>
    );
}
