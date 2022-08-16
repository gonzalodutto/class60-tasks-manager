import { useState } from "react";
import { addTask } from "../../store/tasks/slice";
import { useDispatch } from "react-redux";

const AddTaskForm = () => {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();

  const submit = (event) => {
    // to make sure that the form does not redirect (which is normal browser behavior)
    event.preventDefault();

    // Save in a constant the data of the form:
    const newTask = {
      task,
    };

    // TODO:
    // - dispatch an action that sends the new pizza to the store
    dispatch(addTask(newTask));
    // - clear the input fields
    setTask("");
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new task</h2>
      <p>
        <label>
          Task:{" "}
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
      </p>

      <p>
        <button type="submit">Add this Task!</button>
      </p>
    </form>
  );
};

export { AddTaskForm };
