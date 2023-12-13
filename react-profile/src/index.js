import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

function App() {
  return <Card />;
}

function Card() {
  return (
    <div className="card">
      <Avatar />
      <Data />
    </div>
  );
}

function Avatar() {
  return (
    <img className="Avatar" src="./profile-picture.png" alt="avatar"></img>
  );
}

function Data() {
  return (
    <div className="data">
      <h1>Thomas Tuvera</h1>
      <p>
        Full-stack web developer and AI Trainer at DataAnnotation. When not
        coding or hanging out with AI chatbots, I like to play videogames, play
        guitar, or read a good book.
      </p>
      <SkillList />
    </div>
  );
}

function SkillList() {
  return (
    <ul className="skill-list">
      <Skill backgroundColor="lightblue" text="HTML+CSS" icon="./alien.png" />
      <Skill backgroundColor="yellow" text="JavaScript" icon="./alien.png" />
      <Skill backgroundColor="green" text="React" icon="./alien.png" />
      <Skill backgroundColor="red" text="Java" icon="./alien.png" />
      <Skill backgroundColor="cyan" text="Python" icon="./alien.png" />
      <Skill backgroundColor="orange" text="Git & Github" icon="./alien.png" />
    </ul>
  );
}

function Skill(props) {
  return (
    <li className="skill" style={{ backgroundColor: props.backgroundColor }}>
      {props.text}
      <span>
        <img src={props.icon} alt="icon"></img>
      </span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
