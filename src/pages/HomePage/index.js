import { selectTasks } from "../../store/tasks/selectors";
import { useSelector } from "react-redux";
import { AddTaskForm } from "../../components/AddTaskForm";
import "./styles.css";

const HomePage = () => {
  const tasksInitialState = useSelector(selectTasks);

  return (
    <div className="home-page">
      <div className="app-card">
        <div className="card-header">
          <h2>
            {
              tasksInitialState.tasks.filter(
                (taskObj) => taskObj.completed === false
              ).length
            }{" "}
            left tasks to do:
          </h2>
          <div>
            {tasksInitialState.tasks.length <=
            tasksInitialState.maxTasks - 1 ? (
              <AddTaskForm />
            ) : (
              <h3>"You can't put any more tasks"</h3>
            )}
          </div>
        </div>

        <div>
          {tasksInitialState.tasks &&
            tasksInitialState.tasks
              .filter((taskObj) => taskObj.completed === false)
              .map((taskObj, i) => {
                return (
                  <div key={i} className="task-card">
                    {taskObj.task}{" "}
                    <div>
                      <button className="favorite-button"> ✅</button>{" "}
                      <button className="favorite-button"> ❌</button>
                    </div>
                  </div>
                );
              })}
        </div>
        <div>
          {tasksInitialState.tasks &&
            tasksInitialState.tasks
              .filter((taskObj) => taskObj.completed === true)
              .map((taskObj, i) => {
                return (
                  <div key={i} className="task-card">
                    {" "}
                    <del>{taskObj.task} </del>
                    <button className="favorite-button"> ❌</button>{" "}
                  </div>
                );
              })}
        </div>
        <div className="signature">Developed by Gonza</div>
      </div>
    </div>
  );
};

export { HomePage };
