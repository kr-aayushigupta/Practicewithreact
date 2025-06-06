import React from "react";

import Link from "next/link";

function Navbar() {
  return (
    <div className="flex flex-row justify-around gap-4 mt-8  bg-white/50 mx-10 py-2 rounded-xl">
      <Link
        className="hover:text-cyan-700 text-white text-2xl bg-cyan-700 hover:bg-white px-4 py-2 rounded-md font-semibold"
        href={`/`}
      >
        Home
      </Link>
      <Link
        className="hover:text-cyan-700 text-white text-2xl bg-cyan-700 hover:bg-white px-4 py-2 rounded-md font-semibold"
        href={`/tasks`}
      >
        Dashboard
      </Link>
      <Link
        className="hover:text-cyan-700 text-white text-2xl bg-cyan-700 hover:bg-white px-4 py-2 rounded-md font-semibold"
        href={`/tasks/new`}
      >
        Add New Task
      </Link>
    </div>
  );
}

export default Navbar;
