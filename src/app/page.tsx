import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="flex flex-col justify-center items-center gap-4 bg-cyan-400/40 px-10 py-6 rounded-2xl ">

      <h1 className="text-2xl font-semibold text-white">Hello Welcome to React with Mongoose</h1>
      <Link className="hover:text-cyan-700 text-white text-2xl bg-cyan-700 hover:bg-white px-4 py-2 rounded-md font-semibold" href={"/tasks/"}> Task Dashboard</Link>
      <Link className="hover:text-cyan-700 text-white text-2xl bg-cyan-700 hover:bg-white px-4 py-2 rounded-md font-semibold" href={"/tasks/new"}> Add New Task</Link>
      
    </div>
    </div>
  );
}
