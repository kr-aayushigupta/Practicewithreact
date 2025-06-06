// get and post


import { NextResponse } from "next/server";

import { connectDB } from "@/lib/mongodb";
import TaskModel from "@/models/Task";

export async function GET(){
    await connectDB();
    const tasks=await TaskModel.find();
    return NextResponse.json(tasks);
}


export async function POST(req:Request) {

    await connectDB();
    const body=await req.json();

    const newtask=new TaskModel({
        task:body.task,
        description:body.description,
        status:body.status,
    })

    const saved=await newtask.save();
    return NextResponse.json(saved,{status:201})
    
}