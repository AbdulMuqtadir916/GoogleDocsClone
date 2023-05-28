import React from "react";
import arrowback from "../Assets/arrow_back.svg";

export default function Main() {
  return (
    <div>
      <div className="border-r border-solid border-[#c4c7c5] w-[26px] h-[1100px] relative">
        <div className="fixed  top-[146px] w-[272px] left-[50px]">
          <img
            src={arrowback}
            className="cursor-pointer p-[10px] hover:bg-[#E8EBEE] transition duration-200 ease-out rounded-full"
            alt=""
          />
        </div>
        <div className="w-[814px] h-[1056px] absolute left-[315px] top-[15px] border-solid border border-[#c7c7c7]">
          <div
            contentEditable={true}   className="bg-white hover:border-[#c4c7c5] outline-none cursor-text w-full h-full"
          ></div>
        </div>
      </div>
      <div className="left-[1377px] pt-[17px] w-[35px] h-[1100px] fixed top-[61px] z-[100] flex flex-col gap-[32px]">
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/color/48/google-calendar--v2.png"
          alt="google-calendar--v2"
        />
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/color/48/google-translate.png"
          alt="google-translate"
        />
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/fluency/48/google-maps-new.png"
          alt="google-maps-new"
        />
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/color/48/google-cloud.png"
          alt="google-cloud"
        />
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/color/48/google-slides.png"
          alt="google-slides"
        />
        <img
          width="40"
          height="40"
          src="https://img.icons8.com/color/40/google-drive--v1.png"
          alt="google-drive--v1"
        />
      </div>
    </div>
  );
}
