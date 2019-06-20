import React, { Component } from "react";
import "./App.css";
import TodoEntry from "./Components/TodoEntry";
import TodoItems from "./Components/TodoItems";
import TodoControl from "./Components/TodoControl";

class App extends Component {
  render() {
    return (
      <div id="todoapp" className="todoapp">
        <TodoEntry />
        <TodoItems />
        <TodoControl />
      </div>
    );
  }
}

export default App;
