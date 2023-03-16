import React from "react";
import TaskShow from "./TaskShow";

export default function TaskList({ tasklist }) {
 

  return (
    <div className="w-full justify-between flex gap-4  flex-wrap">
      {tasklist.map((task, index) => {
        return (
            <TaskShow key={task.id} taskid={task.id} taskdes={task.description} taskname={task.name}/>
        )
      })}
    </div>
  );
}
