import { useState } from "react";
import AddTask from "./component/AddTask";
import TaskList from "./component/TaskList";

function JiraApp() {
  const [taskList, setTaskList] = useState([]);
  const createTask = (name, description) => {
    const createdTask = [
      ...taskList,
      {
        id: Math.round(Math.random() * 999999),
        name,
        description,
      },
    ];
    setTaskList(createdTask);
  };

  return (
    <>
      <div className=" flex flex-col  items-center  w-[500px] bg-gray-200 mt-7">
        <h1 className=" text-xl text-center">Please Add Task </h1>
        <AddTask onsubmit={createTask} />
      </div>
      <div className="w-full mt-10">
        <TaskList tasklist={taskList} />
      </div>
    </>
  );
}

export default JiraApp;
