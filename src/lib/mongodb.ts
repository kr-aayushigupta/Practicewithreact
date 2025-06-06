import mongoose, {Connection} from "mongoose";

const MONGODB_URI=process.env.MONGODB_URI;


if(!MONGODB_URI){
    throw new Error("Please Define Mongodb URI");
}


export const connectDB=async()=>{
    try{
        if(mongoose.connection.readyState===0){
            await mongoose.connect(MONGODB_URI,{
                bufferCommands:false,
            });
            console.log("Mongodb Connected succesfully !!")
        }
    }
    catch(error){
        console.error("Could not connect with Mongodb : ",error);
        throw error;

    }
}