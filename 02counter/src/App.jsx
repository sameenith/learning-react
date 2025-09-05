import { use } from "react";
import "./App.css";
import { useState } from "react";

function App() {
  // let counter=15;

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    counter++;
    if (counter > 20) {
      counter = 20;
    }
    setCounter(counter);
    console.log(counter);
  };

  //----interview type question----//
/*
  const addValue = () => {
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);
  };
*/

/*
  const addValue = () => {
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
    setCounter(prevCounter=>prevCounter+1);
  };
*/
  const removeValue = () => {
    counter--;
    if (counter < 0) {
      counter = 0;
    }
    setCounter(counter);
    console.log(counter);
  };

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add Value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  );
}

export default App;
