import React from "react";
import Feed from "./Feed";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

export default function Home() {
  return (
    <div className="flex justify-between w-[82%] mx-auto">
      <LeftSidebar />
      <Feed />
      <RightSidebar />
    </div>
  );
}
