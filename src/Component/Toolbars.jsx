import React, { useState } from "react";
import undo from "../Assets/undo.svg";
import redo from "../Assets/redo.svg";
import roller from "../Assets/imagesearch_roller.svg";
import print from "../Assets/print.svg";
import spellchecker from "../Assets/spellcheck.svg";
import add from "../Assets/add.svg";
import remove from "../Assets/remove.svg";
import bold2 from "../Assets/bold2.svg";
import italic1 from "../Assets/italic1.svg";
import underline from "../Assets/underline.svg";
import fontColor from "../Assets/fontColor.svg";
import fontHighliter from "../Assets/fontHighliter.svg";
import ToolbarHover from "./ToolbarHover";


export default function Toolbars() {
  let [value, setValue] = useState("");
  let [fontSize, setFontSize] = useState(11);
  let [click, setClick] = useState(true); 
  let [showComp, setShowComp] = useState(false);
  let [showbg, setShowbg] = useState({
    paint: false,
    print: false,
    spellingChk: false,
    zoom: false,
    bold: false,
    italic: false,
    underline: false,
    fontcolor: false,
    highlitecolor: false,
  });

  let handleMouseEnter = (e) => {
    setClick(true);
    setTimeout(() => {
      return setValue(e.target.id);
    }, 500);
  };

  let handleMouseLeave = (e) => {
    setClick(false);
    setTimeout(() => {
      return setValue("");
    }, 100);
  };

  let onClickHandlerUndo = (undo) => {
    setClick(false);

    // setShowComp(!showComp)
  };

  let onClickHandlerRedo = (redo) => {
    setClick(false);

    // setShowComp(!showComp)
  };

  let onClickHandlerPaint = (paint) => {
    setClick(false);
    setShowbg((prevState) => ({
      ...prevState,
      [paint]: !prevState[paint],
    }));
    // setShowComp(!showComp)
  };

  let onClickHandlerPrint = (print) => {
    setClick(false);
    setShowbg((prevState) => ({
      ...prevState,
      [print]: !prevState[print],
    }));
    // setShowComp(!showComp)
  };

  let onClickHandlerSpellingChk = (spellingChk) => {
    setClick(false);
    setShowbg((prevState) => ({
      ...prevState,
      [spellingChk]: !prevState[spellingChk],
    }));
    // setShowComp(!showComp)
  };

  let onClickHandlerZoom = (zoom) => {
    setClick(false);
    // setShowbg((prevState)=>({
    //   ...prevState,
    //   [zoom]: !prevState[zoom]
    // }))
    setShowComp(!showComp);
  };

  let onClickHandlerBold = (bold) => {
    setClick(false);
    setShowbg((prevState) => ({
     
      ...prevState,
      [bold]: !prevState[bold],
     
    }
    ));
    // setShowComp(!showComp)
  };

  let onClickHandlerItalic = (italic) => {
    setClick(false);
    setShowbg((prevState) => ({
      ...prevState,
      [italic]: !prevState[italic],
    }));
    // setShowComp(!showComp)
  };

  let onClickHandlerUnderline = (underline) => {
    setClick(false);
    setShowbg((prevState) => ({
      ...prevState,
      [underline]: !prevState[underline],
    }));
    // setShowComp(!showComp)
  };

  let onClickHandlerFontColor = (fontcolor) => {
    setClick(false);
    setShowbg((prevState) => ({
      ...prevState,
      [fontcolor]: !prevState[fontcolor],
    }));
    // setShowComp(!showComp)
  };

  let onClickHandlerHighlightColor = (highlitecolor) => {
    setClick(false);
    setShowbg((prevState) => ({
      ...prevState,
      [highlitecolor]: !prevState[highlitecolor],
    }));
    // setShowComp(!showComp)
  };

  return (
    <>
      <div className="flex items-center px-4 mr-[78px]  mt-1 gap-[4px] bg-[#edf2fa] rounded-3xl h-[43px] ">
        <img
          className={`options ${
            showbg.undo ? "bg-[#d3e3fe]" : "bg-transparent"
          } p-2`}
          id="Undo"
          src={undo}
          onClick={() => onClickHandlerUndo("undo")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          alt=""
          srcset=""
        />
        <img
          className={`options ${
            showbg.redo ? "bg-[#d3e3fe]" : "bg-transparent"
          }  p-2`}
          id="Redo"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => onClickHandlerRedo("redo")}
          src={redo}
          alt=""
          srcset=""
        />
        <img
          className={`options ${
            showbg.paint ? "bg-[#d3e3fe]" : "bg-transparent"
          } p-2`}
          id="Paint Fromat"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => onClickHandlerPaint("paint")}
          src={roller}
          alt=""
          srcset=""
        />
        <img
          className={`options ${
            showbg.print ? "bg-[#d3e3fe]" : "bg-transparent"
          } p-2`}
          id="Print"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => onClickHandlerPrint("print")}
          src={print}
          alt=""
          srcset=""
        />
        <img
          className={`options ${
            showbg.spellingChk ? "bg-[#d3e3fe]" : "bg-transparent"
          } p-2`}
          id="Spelling and grammer check"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={() => onClickHandlerSpellingChk("spellingChk")}
          src={spellchecker}
          alt=""
          srcset=""
        />

        <div
          className="flex options items-center  relative p-1"
          id="Zoom"
          onMouseEnter={handleMouseEnter}
          onClick={onClickHandlerZoom}
          onMouseLeave={handleMouseLeave}
        >
          <input
            type="text"
            value="100%"
            className=" w-16 bg-transparent py-[1px] px-1"
          ></input>
          <span class="  material-symbols-outlined absolute left-[3.25rem] cursor-pointer">
            arrow_drop_down
          </span>
        </div>

        <div className="border-l-[1px] h-6 border-[#bcbcbc] border-solid  rounded-lg"></div>

        <div
          className="flex options items-center relative p-1"
          id="Styles"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <input
            type="text"
            value="Normal text"
            className=" w-28 bg-transparent py-[1px] px-1"
          ></input>
          <span class="  material-symbols-outlined absolute left-[6.25rem] cursor-pointer">
            arrow_drop_down
          </span>
        </div>

        <div className="border-l-[1px] h-6 border-[#bcbcbc] border-solid  rounded-lg"></div>

        <div
          className="flex options items-center relative p-1"
          id="Font"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <input
            type="text"
            value="Arial"
            data-tooltip
            aria-label="Font"
            className=" w-28 bg-transparent py-[1px] px-1"
          ></input>
          <span class="  material-symbols-outlined absolute left-[6.25rem] cursor-pointer">
            arrow_drop_down
          </span>
        </div>

        <div className="border-l-[1px]  h-6 border-[#bcbcbc] border-solid  rounded-lg"></div>

        <div className="flex items-center pl-[2px] gap-[2px]">
          <img
            className="options p-1"
            id="Decrease font size"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setFontSize(fontSize - 1)}
            src={remove}
            alt=""
          />
          <input
            id="Font size"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            type="text"
            value={fontSize}
            className="rounded-md  text-center w-8 h-6 bg-transparent border-[#bcbcbc] border-[1px]  border-solid"
          />
          <img
            className="h-[27px] p-[3px] options"
            id="Increase font size"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => setFontSize(fontSize + 1)}
            src={add}
          />
        </div>

        <div className="border-l-[1px]  h-6 border-[#bcbcbc] border-solid  rounded-lg"></div>

        <img
          className={`p-2 ${
            showbg.bold ? "bg-[#d3e3fe]" : "bg-transparent"
          } options`}
          src={bold2}
          id="Bold"
          onClick={() => onClickHandlerBold("bold")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></img>
        <img
          className={`p-2 ${
            showbg.italic ? "bg-[#d3e3fe]" : "bg-transparent"
          } options`}
          src={italic1}
          id="Italic"
          onClick={() => onClickHandlerItalic("italic")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></img>
        <img
          className={`p-2 ${
            showbg.underline ? "bg-[#d3e3fe]" : "bg-transparent"
          } options`}
          src={underline}
          id="Underline"
          onClick={() => onClickHandlerUnderline("underline")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></img>
        <img
          className={`p-2 ${
            showbg.fontcolor ? "bg-[#d3e3fe]" : "bg-transparent"
          } options`}
          src={fontColor}
          id="Text color"
          onClick={() => onClickHandlerFontColor("fontcolor")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></img>
        <img
          className={`p-2 ${
            showbg.highlitecolor ? "bg-[#d3e3fe]" : "bg-transparent"
          } options`}
          src={fontHighliter}
          id="Highlight color"
          onClick={() => onClickHandlerHighlightColor("highlitecolor")}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        ></img>

        <div className="border-l-[1px]  h-6 border-[#bcbcbc] border-solid  rounded-lg"></div>
      </div>
      <div className="relative z-20 ">
        <ToolbarHover value={value} click={click} />
        {showComp === true ? (
          <h1 className="absolute -top-4 z-40">hellogvhgv</h1>
        ) : (
          ""
        )}
        <div className="pt-1">
          <div className=" w-987 ml-[9px]  border-b border-[#c4c7c5] h-[15px] border-solid">
            <div className="w-[815px] h-[15px] bg-transparent absolute left-[300px]">
              <div className="w-[683px] border-b border-solid border-[#747775] absolute left-[36px] top-[14px]"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
