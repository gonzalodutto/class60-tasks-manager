import { selectTasks } from "../../store/tasks/selectors";
import { useSelector } from "react-redux";
import { AddTaskForm } from "../../components/AddTaskForm";
import "./styles.css";

const HomePage = () => {
  const tasksInitialState = useSelector(selectTasks);

  return (
    <div>
      <h1>Home Page</h1>
      Tasks manager:
      <br />
      <div>
        {tasksInitialState.tasks &&
          tasksInitialState.tasks.map((tastkObj, i) => {
            return <li key={i}>{tastkObj.task} </li>;
          })}
      </div>
      {tasksInitialState.tasks.length <= tasksInitialState.maxTasks - 1 ? (
        <AddTaskForm />
      ) : (
        "You can't put any more tasks"
      )}
    </div>
  );
};

export { HomePage };
