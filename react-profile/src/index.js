import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import { skills } from "./skills-data";

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
      {skills.map((skill) => (
        <Skill skillListObj={skill} key={skill.name} />
      ))}
    </ul>
  );
}

function Skill({ skillListObj }) {
  let levelEmoji = "";
  switch (skillListObj.level) {
    case "advanced":
      levelEmoji = "😎";
      break;
    case "intermediate":
      levelEmoji = "👍";
      break;
    case "beginner":
      levelEmoji = "👶";
      break;
    default:
      levelEmoji = "";
  }
  return (
    <li className="skill" style={{ backgroundColor: skillListObj.color }}>
      {skillListObj.name}
      <span>{levelEmoji}</span>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
