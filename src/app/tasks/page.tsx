// Display all the tasks here. in the form of list - using get api
"use client";

import TaskCard from "@/components/TaskCard";
import React, { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
type Task = {
  _id: string;
  task: string;
  description: string;
  status: string;
};

function DisplayAllTaskpage() {
  const [alltasks, setalltasks] = useState<Task[]>([]);

  const router = useRouter();

  const fetchalltasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setalltasks(data);
  };

  useEffect(() => {
    fetchalltasks();
  }, []);

  return (
    <div className="flex justify-center items-center mt-20">
      <div className="flex flex-col justify-center items-center gap-4 bg-cyan-400/40 px-10 py-6 rounded-2xl ">
       
        <h1 className="text-2xl font-semibold text-white">TASKS</h1>

        {alltasks.length === 0 ? (
          <p className="text-2xl font-semibold text-white">No tasks till now</p>
        ) : (
          <div className="grid grid-flow-row-dense grid-cols-3 gap-4 justify-center items-center">
            {alltasks.map((t: Task) => (
              <TaskCard
                key={t._id}
                initialData={t}
                onDeleteSubmit={() => router.push(`/tasks/${t._id}`)}
                onUpdateSubmit={() => router.push(`/tasks/${t._id}`)}
              ></TaskCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default DisplayAllTaskpage;
