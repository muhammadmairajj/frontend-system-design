import Button from "./components/Button/Button";

import "./App.css";
// import AutoComplete from "./components/AutoComplete/AutoComplete";
import AutoComplete from "./components/AutoComplete/Practice";

const data = ["Apple", "Mango", "Grapes", "Banana", "Orange", "Cherry"];

function App() {
  return (
    <div className="App">
      <h1>Frontend System Design</h1>

      {/* <AutoComplete
      data={data}
      onSelect={(value) => console.log("user selected", value)}
      /> */}
      <AutoComplete
       data={data}
       onSelect={(value) => console.log("user selected", value)}
      />
      
      {/* <Button label="Click Me" onClick={() => console.log("Hey there")}>
        Hello
      </Button>
      <Button label="Click Me" onClick={() => console.log("Hey there")} /> */}


    </div>
  );
}

export default App;
