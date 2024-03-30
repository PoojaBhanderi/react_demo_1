import { useState } from "react";
import Header from "./components/Header/Header";
import { CORE_CONCEPTS } from "./data.js";
import TabButton from "./components/TabButton.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import { EXAMPLES } from "./data.js"

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    // console.log(selectedTopic);
  }

  let tabContent = <p>Please select a topic.</p>;
  if (selectedTopic) {
    tabContent = (<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
          {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
    </div>);
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept {...CORE_CONCEPTS[0]} />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect('components')}
              isSelected={selectedTopic === 'components'}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}
              isSelected={selectedTopic === 'jsx'}>Jsx</TabButton>
            <TabButton onSelect={() => handleSelect('props')}
              isSelected={selectedTopic === 'props'}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')}
              isSelected={selectedTopic === 'state'}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}
export default App;


// import { useState } from "react";
// import logo from './logo.svg';
// import './App.css';
// import { act } from "react-dom/test-utils";

// ********************************************* REACT FIRST DEMO 
// const content = [
//   [
//     "React is extremely popular",
//     "It makes building complex, interactive UIs a breeze",
//     "It's powerful & flexible",
//     "It has a very active and versatile ecosystem"
//   ],
//   [
//     "Components, JSX & Props",
//     "State",
//     "Hooks (e.g., useEffect())",
//     "Dynamic rendering"
//   ],
//   [
//     "Official web page (react.dev)",
//     "Next.js (Fullstack framework)",
//     "React Native (build native mobile apps with React)"
//   ]
// ];
// ********************************************* REACT FIRST DEMO END

// ********************************************* REACT FIRST DEMO
//  const [activeContentIndex, setActiveContentIndex] = useState(0);

//   return (
// <div className="App">
//   <header className="App-header">
//     <div>
//       <img src={logo} className="App-logo" alt="logo" />
//       <h1>React.js</h1>
//       <p>i.e., using the React library for rendering the UI</p>
//     </div>
//   </header>
//   <div id="tabs">
//     <menu>
//       <button onClick={() => setActiveContentIndex(0)}
//         className={activeContentIndex === 0 ? "active" : ""}>
//         Why React?
//       </button>
//       <button onClick={() => setActiveContentIndex(1)}
//         className={activeContentIndex === 1 ? "active" : ""}>
//         Core Features
//       </button>
//       <button onClick={() => setActiveContentIndex(2)}
//         className={activeContentIndex === 2 ? "active" : ""}>
//         Related Resources
//       </button>
//     </menu>

//     <div id="tab-content">
//       <ul>
//         {content[activeContentIndex].map((item) => (
//           <li key={item}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   </div>
// </div>
// );
// ********************************************* REACT FIRST DEMO END

