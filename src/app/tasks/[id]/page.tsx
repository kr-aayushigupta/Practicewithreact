// To edit page for a task - to send updated data to api/tasks/[id]/route to put the data or dlete the data using dlete method
"use client";

import TaskEditForm from "@/components/TaskEditForm";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";

type Task = {
  _id: string;
  task: string;
  description: string;
  status: string;
};

function page() {
  const [initialtask, setinitialtask] = useState<Task>({
    _id: "",
    task: "",
    description: "",
    status: "",
  });
  const params = useParams();
  const router = useRouter();

  // ✅ Fetch the existing task using correct template literal syntax
//   const fetchinitialtask = async () => {
//     const res = await fetch(`/api/tasks/${params.id}`);
//     const data = await res.json();
//     setinitialtask(data);
//   };


const fetchinitialtask = async () => {
    try {
      const res = await fetch(`/api/tasks/${params.id}`);
      if (!res.ok) throw new Error("Failed to fetch");
  
      const data = await res.json();
      setinitialtask(data);
    } catch (err) {
      console.error("Fetch task error:", err);
    }
  };
  
  
  // ✅ Fetch task when component mounts
  useEffect(()=>{
    fetchinitialtask();
  },[]);


   // ✅ DELETE request
  const handleDeleteTask = async (taskdata: Task) => {
    const res = await fetch(`/api/tasks/${taskdata._id}`, {
      method: "DELETE",
    });

    if (res.ok) {
        console.log("✅ Task deleted successfully");
        router.push("/tasks"); // Redirect after delete
      } else {
        console.log("Failed to delete task");
      }
  };


    // ✅ PUT request - to edit the existing task
  const handleEditTask = async (taskdata: Task
    ) => {
    const res = await fetch(`/api/tasks/${taskdata._id}`, {
      method: "PUT",
      body: JSON.stringify(taskdata),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.ok) {
      console.log(" ✅ Task updated Successfully");
      router.push("/tasks");
      
    } else {
      console.log("Failed to update the task");
    }
  };

  if (!initialtask._id) {
    return <div className="text-center mt-10 text-gray-600">Loading task...</div>;
  }
  

  return (
    <div className="max-w-xl mx-auto p-6">
        <h1 className="text-xl font-bold mb-4">Edit Task</h1>
      <TaskEditForm
        initialdata={initialtask}
        onDeleteSubmit={handleDeleteTask}
        onUpdateSubmit={handleEditTask}
      ></TaskEditForm>
    </div>
  );
}

export default page;
