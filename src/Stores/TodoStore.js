import { action, observable } from "mobx";
import TodoModel from "./TodoModel";

class TodoStore {
  @observable todos = [];
  @observable itemsType = 'all';
  lastID = 0;

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(this, title, false, false, this.lastID++));
    if (this.itemsType === "completed")
      this.todos[this.todos.length - 1].hide();
  }

  @action
  removeItemTodo(id) {
    this.todos = this.todos.filter(item => item.id != id);
  }

  @action
  removeCompletedItems() {
    this.todos = this.todos.filter(item => item.completed == false);
  }

  @action
  showAllItems() {
    this.itemsType = "all";
    let i = 0;
    this.todos.map(todo => {
      todo.hidden ? todo.expose() : i++;
    });
  }

  @action
  showActiveItems() {
    this.itemsType = "active";
    this.todos.map(todo => {
      todo.completed ? todo.hide() : todo.expose();
    });
  }

  @action
  showCompletedItems() {
    this.itemsType = "completed";
    this.todos.map(todo => {
      !todo.completed ? todo.hide() : todo.expose();
    });
  }
}

const store = new TodoStore();
export default store;
