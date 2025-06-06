// To edit page for a task - to send updated data to api/tasks/[id]/route to put the data or dlete the data using dlete method
"use client";

import TaskEditForm from "@/components/TaskEditForm";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useState } from "react";
import toast from "react-hot-toast";

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
        toast.error("Failed to Fetch the Task")
      console.error("Fetch task error:", err);
    }
  };

  // ✅ Fetch task when component mounts
  useEffect(() => {
    fetchinitialtask();
  }, []);

  // ✅ DELETE request
  const handleDeleteTask = async (taskdata: Task) => {
    const res = await fetch(`/api/tasks/${taskdata._id}`, {
      method: "DELETE",
    });

    if (res.ok) {
        toast.success("Task Deleted Successfully")
      console.log("✅ Task deleted successfully");
      router.push("/tasks"); // Redirect after delete
    } else {
        toast.error("Failed to delete the Task")
      console.log("Failed to delete task");
    }
  };

  // ✅ PUT request - to edit the existing task
  const handleEditTask = async (taskdata: Task) => {
    const res = await fetch(`/api/tasks/${taskdata._id}`, {
      method: "PUT",
      body: JSON.stringify(taskdata),
      headers: {
        "Content-type": "application/json",
      },
    });

    if (res.ok) {
        toast.success("Task Updated Successfully")
      console.log(" ✅ Task updated Successfully");
      router.push("/tasks");
    } else {
        toast.error("Failed to update the Task")
      console.log("Failed to update the task");
    }
  };

  if (!initialtask._id) {
    return (
      <div className="text-center mt-10 text-gray-600">Loading task...</div>
    );
  }

  return (
    <div className="max-w-xl mx-auto mt-30 bg-white px-4 py-2">
      <h1 className="text-xl font-bold mb-4 text-center">Edit the Task</h1>
      <TaskEditForm
        initialdata={initialtask}
        onDeleteSubmit={handleDeleteTask}
        onUpdateSubmit={handleEditTask}
      ></TaskEditForm>
    </div>
  );
}

export default page;
