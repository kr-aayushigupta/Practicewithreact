// use Task form component here and send all the new data to api/tasks/route to create new task in db - using post method

"use client";

import TaskForm from "@/components/TaskForm";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import React from "react";

function Addnewtaskpage() {
  const router = useRouter();

  const handleaddtask = async (taskdata: {
    task: String;
    description: String;
    status: String;
  }) => {
    const res = await fetch("/api/tasks", {
      method: "Post",
      body: JSON.stringify(taskdata),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.ok) {
        toast.success("Task Added Successfully")
      console.log("Task added successfully");
      router.push("/tasks");
    } else {
        toast.error("Failed to Add the Task")
      console.log("Error in adding the new Task - response is not ok");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-30 bg-white px-4 py-2">
      <h1 className="text-xl font-bold mb-4 text-center">Add New Task</h1>
      <TaskForm onSubmit={handleaddtask}></TaskForm>
    </div>
  );
}

export default Addnewtaskpage;
