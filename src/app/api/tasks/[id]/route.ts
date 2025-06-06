// put and dlete

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import TaskModel from "@/models/Task";


export async function PUT(req:Request , {params}:{params:{id:string}}){


    await connectDB();
    const body=await req.json();

    const updated=await TaskModel.findByIdAndUpdate(
        params.id,{
            task:body.task,
            description:body.description,
            status:body.status,
        }
    )

    if(!updated){
        return NextResponse.json({error:"Task not found in database"},{status:404})
    }

    return NextResponse.json(updated);

}



export async function DELETE(_:Request,{params}:{params:{id:string}}){

    await connectDB();
    const deleted=await TaskModel.findByIdAndDelete(params.id)

    if(!deleted){
        return NextResponse.json({error:"Task not found in DB to delete"},{status:404})

    }
    return NextResponse.json(deleted);



}


export async function GET(_:Request,{params}:{params:{id:string}}){
    await connectDB();

    try {
        const task = await TaskModel.findById(params.id);
        if (!task) {
          return NextResponse.json({ error: "Task not found" }, { status: 404 });
        }
        return NextResponse.json(task, { status: 200 });
      } catch (err) {
        return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
      }
    }