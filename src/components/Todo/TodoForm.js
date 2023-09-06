import { useState } from "react";
import "../App/App.css";
import useCreateApi from "../../hooks/useCreateApi";

const TodoForm = ({ setTaskList }) => {
  const [value, setValue] = useState("");
  const { createTask } = useCreateApi();

  const handleSubmitAdd = async (e) => {
    try {
      e.preventDefault();
      if (!value) return;
      const res = await createTask("/todos/createTodo", {
        text: value,
        isCompleted: false,
      });
      const { data } = res.data;
      setTaskList([...data] || []);
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
