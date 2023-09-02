import { useState } from "react";
import "../App/App.css";
import TodoApis from "../../helpers/commonApis/todoListApi.js";

const TodoForm = ({ setTodos }) => {
  const [value, setValue] = useState("");

  const handleSubmitAdd = async (e) => {
    try {
      e.preventDefault();
      if (!value) return;
      const res = await TodoApis.addNewTodo({
        text: value,
        isCompleted: false,
      });
      const { data } = res.data;
      setTodos([...data]);
      setValue("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmitAdd}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
};

export default TodoForm;
