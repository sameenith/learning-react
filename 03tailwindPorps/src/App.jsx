import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card1 from "./card1";

function App() {
  const [count, setCount] = useState(0);
  const preson = {
    userName: "John",
    age: 30,
    city: "New York",
    profession: ["Developer", "Designer"],
  };
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind CSS
      </h1>
      <Card1 user={preson} btnText="click me"/>
      <Card1 user={preson} btnText="visit me"/>
    </>
  );
}

export default App;
