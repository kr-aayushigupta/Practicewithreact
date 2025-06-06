// put and dlete

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import TaskModel from "@/models/Task";

export async function PUT(req: Request, context: { params: { id: string } }) {
  await connectDB();
  const { id } = context.params;
  const body = await req.json();

  const updated = await TaskModel.findByIdAndUpdate(id, {
    task: body.task,
    description: body.description,
    status: body.status,
  });

  if (!updated) {
    return NextResponse.json(
      { error: "Task not found in database" },
      { status: 404 }
    );
  }

  return NextResponse.json(updated);
}

export async function DELETE(_: Request, context: { params: { id: string } }) {
  await connectDB();
  const { id } = context.params;
  const deleted = await TaskModel.findByIdAndDelete(id);

  if (!deleted) {
    return NextResponse.json(
      { error: "Task not found in DB to delete" },
      { status: 404 }
    );
  }
  return NextResponse.json(deleted);
}

export async function GET(_: Request, context:  { params: { id: string } }) {
  await connectDB();
  const { id } = context.params;


    const task = await TaskModel.findById(id);
    if (!task) {
      return NextResponse.json({ error: "Task not found" }, { status: 404 });
    }
    return NextResponse.json(task, { status: 200 });
  
  }

