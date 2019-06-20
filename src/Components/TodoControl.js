import React, { Component } from "react";
import { observer } from "mobx-react";
import todoStore from "../Stores/TodoStore";

@observer
class TodoControl extends Component {
  render() {
    let counter = 0;
    todoStore.todos.forEach(item => {
      if (!item.completed) {
        counter++;
      }
    });
    if (todoStore.todos.length > 0) {
      return (
        <footer className="footer">
          <div className="todo-count">
            {counter === 0
              ? ""
              : counter === 1
              ? counter + " item left"
              : counter + " items left"}
          </div>
          <ul className="filters">
            <li>
              <button
                className={todoStore.itemsType === "all" ? "selected" : ""}
                onClick={() => todoStore.showAllItems()}
              >
                All
              </button>
            </li>
            <li>
              <button
                className={todoStore.itemsType === "active" ? "selected" : ""}
                onClick={() => todoStore.showActiveItems()}
              >
                Active
              </button>
            </li>
            <li>
              <button
                className={
                  todoStore.itemsType === "completed" ? "selected" : ""
                }
                onClick={() => todoStore.showCompletedItems()}
              >
                Completed
              </button>
            </li>
          </ul>
          <button
            className="clear-completed"
            onClick={() => {
              todoStore.removeCompletedItems();
            }}
          >
            Clear completed
          </button>
        </footer>
      );
    } else {
      return "";
    }
  }
}

export default TodoControl;
