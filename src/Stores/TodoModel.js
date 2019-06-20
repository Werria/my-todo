import { observable, action } from "mobx";
import todoStore from "../Stores/TodoStore";

class TodoModel {
  store;
  id;
  @observable title;
  @observable completed;
  @observable hidden;

  constructor(store, title, completed, hidden, id) {
    this.store = store;
    this.title = title;
    this.completed = completed;
    this.hidden = hidden;
    this.id = id;
  }

  @action
  toggle() {
    this.completed = !this.completed;
    // if (!this.completed && todoStore.itemsType === "completed")
    // todoStore.todos[this.id].hide();
  }

  @action
  hide() {
    this.hidden = true;
  }
  @action
  expose() {
    this.hidden = false;
  }

  @action
  remove() {
    todoStore.removeItemTodo(this.id);
  }
}

export default TodoModel;
