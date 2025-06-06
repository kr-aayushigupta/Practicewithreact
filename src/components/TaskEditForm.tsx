import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

type Task = {
  _id: string;
  task: string;
  description: string;
  status: string;
};

type TaskProps = {
  initialdata: Task;
  onUpdateSubmit: (task: Task) => void;
  onDeleteSubmit: (task: Task) => void;
};

// To add new data of new task - this form should be visible
function TaskEditForm({
  initialdata,
  onUpdateSubmit,
  onDeleteSubmit,
}: TaskProps) {
  const [task, settask] = useState(initialdata?.task || "");
  const [description, setdescription] = useState(
    initialdata?.description || ""
  );
  const [status, setstatus] = useState(initialdata?.status || "");

  const handleedittask = () => {
    const taskobj: Task = {
      _id: initialdata._id,
      task,
      description: description,
      status: status,
    };
    onUpdateSubmit(taskobj);
    // settask("");
    // setdescription("");
    // setstatus("");
  };

  const handledeletetask = () => {
    const taskobj: Task = {
      _id: initialdata?._id,
      task,
      description: description,
      status: status,
    };
    onDeleteSubmit(taskobj);
    // settask("");
    // setdescription("");
    // setstatus("");
  };

  return (
    <div className="flex flex-col gap-2 rounded-2xl">
      <Input
        type="text"
        placeholder="New Task"
        className="bg-white"
        required
        name="newtask"
        value={task}
        onChange={(e) => settask(e.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Task Description"
        className="bg-white"
        name="decription"
        required
        value={description}
        onChange={(e) => setdescription(e.target.value)}
      ></Input>
      <Input
        type="text"
        placeholder="Current Status"
        className="bg-white"
        name="status"
        value={status}
        required
        onChange={(e) => setstatus(e.target.value)}
      ></Input>
      <div className="flex justify-around gap-4">
        <Button
          className="bg-green-600 hover:bg-green-700 hover:cursor-pointer"
          onClick={handleedittask}
        >
          Update Task
        </Button>

        <Button
          className="bg-red-500 hover:bg-red-600 hover:cursor-pointer"
          onClick={handledeletetask}
        >
          Delete Task
        </Button>
      </div>
    </div>
  );
}

export default TaskEditForm;
