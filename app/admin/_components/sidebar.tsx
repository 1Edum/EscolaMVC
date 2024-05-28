import React from "react";
import NavLinks from "./nav-links";

function Sidebar() {
  return (
    <aside className="shadow-3xl h-full flex w-full flex-col gap-y-2 md:h-full ">
      <div className="flex h-5/6 items-end rounded-lg bg-red-700 px-2 md:h-3/4">
        <h1 className="text-4xl text-white">Administrator</h1>
      </div>
      <div className="w-full">
        <NavLinks />
      </div>
      <div className="rounded-lg bg-red-700 hidden md:block md:h-full"></div>
    </aside>
  );
}

export default Sidebar;
