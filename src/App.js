import "./App.css";
import React from "react";
import { List } from "./components/List";
function App() {


  const todos = [{todo: "wake up", id: 1}, {todo: "breakfast", id: 2}, {todo: "study", id: 3}]


  return (
    <div className="App">
      <h1>Hello world</h1>
<List todos ={todos} ></List>


</div>
  );
}

export default App;
