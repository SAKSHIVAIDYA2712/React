import React, { useState } from "react";
import "./index.css";
function App() {
  const [activeIndexNum, setActiveIndexNum] = useState(0);
  const content = [
    [
      "React is extremely popular",
      "It makes building complex, interactive UIs a breeze",
      "It's powerful & flexible",
      "It has a very active and versatile ecosystem",
    ],
    [
      "Components, JSX & Props",
      "State",
      "Hooks (e.g., useEffect())",
      "Dynamic rendering",
    ],
    [
      "Official web page (react.dev)",
      "Next.js (Fullstack framework)",
      "React Native (build native mobile apps with React)",
    ],
    [
      "Vanilla JavaScript requires imperative programming",
      "Imperative Programming: You define all the steps needed to achieve a result",
      "React on the other hand embraces declarative programming",
      "With React, you define the goal and React figures out how to get there",
    ],
  ];
  return (
    <>
      <header>
        <img src="logo192.png" alt="React logo"></img>
        <div>
          <h1>React js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>
      <div className="tabs">
        <button
          className={activeIndexNum === 0 ? "active" : ""}
          onClick={() => {
            setActiveIndexNum(0);
          }}
        >
          Why React ?
        </button>
        <button
          className={activeIndexNum === 1 ? "active" : ""}
          onClick={() => {
            setActiveIndexNum(1);
          }}
        >
          Core Features
        </button>
        <button
          className={activeIndexNum === 2 ? "active" : ""}
          onClick={() => {
            setActiveIndexNum(2);
          }}
        >
          Related Resources
        </button>
        <button
          className={activeIndexNum === 3 ? "active" : ""}
          onClick={() => {
            setActiveIndexNum(3);
          }}
        >
          React vs JS
        </button>
      </div>
      <div className="display">
        <ul>
          {content[activeIndexNum].map((items) => {
            return (
              <>
                <li key={items}>{items}</li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
