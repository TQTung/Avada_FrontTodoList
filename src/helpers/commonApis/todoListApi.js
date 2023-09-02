import { methods } from "../../constants/method.js";
import requestApi from "../httpClient.js";

class TodoApi {
  async getAllTodo() {
    return await requestApi({
      endpoint: "/todos",
      method: methods.GET,
    });
  }

  async addNewTodo(body) {
    return await requestApi({
      endpoint: "/todos/createTodo",
      method: methods.POST,
      body: body,
    });
  }

  async updateComplete(id) {
    return await requestApi({
      endpoint: "/todos/updateComplete",
      method: methods.PUT,
      query: id,
    });
  }

  async undoComplete(id) {
    return await requestApi({
      endpoint: "/todos/undoComplete",
      method: methods.PUT,
      query: id,
    });
  }

  async removeTodos(id) {
    return await requestApi({
      endpoint: "/todos/deleteTodo",
      method: methods.DELETE,
      query: id,
    });
  }
}

const TodoApis = new TodoApi();
export default TodoApis;
