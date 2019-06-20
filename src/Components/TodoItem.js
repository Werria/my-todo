import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from "../Stores/TodoStore";

@observer
class TodoItem extends Component {
  onToggle = () => {
    this.props.todo.toggle();
  };
  removeItemTodo = () => {
    this.props.todo.remove();
  };
  render() {
    let { todo } = this.props;
    return (
      <li
        className={
          `${todo.completed ? "completed" : ""} ` +
          ` ${todo.hidden ? "hidden" : ""}`
        }
      >
        <div className="view">
          <input
            onChange={this.onToggle}
            type="checkbox"
            className="toggle"
            value="on"
            checked={todo.completed}
          />
          <label>{todo.title} </label>
          <button class="destroy" onClick={this.removeItemTodo} />
        </div>
      </li>
    );
  }
}

export default TodoItem;
