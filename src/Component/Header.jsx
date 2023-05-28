import React from "react";
import Navbar from "./Navbar";
import Toolbars from "./Toolbars";

export default function Header() {
  return (
    <div className="pl-4 pt-2 sticky top-0 bg-[#f9fbfd] z-50">
      <Navbar />
      <Toolbars />
    
    </div>
  );
}
