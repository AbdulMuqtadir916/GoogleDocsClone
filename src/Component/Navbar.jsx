import React from "react";
import logo from "../Assets/googledocs.png";
import lock from "../Assets/lock_FILL0_wght400_GRAD0_opsz20.svg";
import me from "../Assets/am.jpeg";
import star from "../Assets/star.svg";

export default function Navbar() {
  return (
    <>
      <div className="flex pr-4 items-center justify-between">
        <div className="flex  items-center content-center">
          <div>
            {/* <img src="./googledocs.png" alt="google" /> */}
            <img src={logo} alt="logo" className="w-10" />
          </div>
          <div className="relative">
            <div className="text-[#1f1f1fad] flex gap-2 text-lg font-semibold pl-1 absolute top-[-20px]">
              <input className="w-[157px] p-1 h-[20px] leading-[22px] " value="Untitled Documnet"></input>{" "}
              <img
                className="text-[#5f6368] p-0 cursor-pointer hover:bg-[#E8EBEE] transition duration-200 ease-out rounded-full"
                src={star}
                alt=""
              />
            </div>

            <div className="flex items-center text-sm space-x-1 absolute -ml-1 h-8 text-gray-600">
              <p className="option text-[#202124]">File</p>
              <p className="option text-[#202124]">Edit</p>
              <p className="option text-[#202124]">View</p>
              <p className="option text-[#202124]">Insert</p>
              <p className="option text-[#202124]">Format</p>
              <p className="option text-[#202124]">Tools</p>
              <p className="option text-[#202124]">Extensions</p>
              <p className="option text-[#202124]">Help</p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <span class="option pt-[11px]  material-symbols-outlined">
            comment
          </span>
          <div className="option flex items-center ">
            <span class=" material-symbols-outlined">videocam</span>
            <span class="material-symbols-outlined">arrow_drop_down</span>
          </div>
          <div className="flex items-center gap-2 hover:shadow-md cursor-pointer bg-[#c2e7ff] rounded-3xl px-5 py-[10px]">
            <img src={lock} alt="" srcset="" />
            <span>Share</span>
          </div>
          <div className="cursor-pointer hover:bg-[#E8EBEE] transition duration-200 ease-out p-2 rounded-full">
            <img src={me} className="w-10" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
