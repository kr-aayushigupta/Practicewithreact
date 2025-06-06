import React from "react";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

type TaskProps={
    onSubmit: (data: { task: string; description: string; status: string;}) => void;
};



// To add new data of new task - this form should be visible
function TaskForm( {onSubmit} : TaskProps ) {
  const [task, settask] = useState("");
  const [description, setdescription] = useState("");
  const [status, setstatus] = useState("");

  const handleaddnewtask = async () => {
    // const payload={
    //     newtask,
    //     description,
    //     status
    // }
    // try{
    //     const res=await fetch("/app/api/tasks")
    // }catch(e){
    // }

    onSubmit({task,description,status});
    settask("");
    setdescription("");
    setstatus("");
  };

  return (
    <div className="flex flex-col gap-4 ">
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

      <Button
        className="bg-green-600 hover:bg-green-700 hover:cursor-pointer"
        onClick={handleaddnewtask}
      >
        Add Task
      </Button>
    </div>
  );
}

export default TaskForm;
