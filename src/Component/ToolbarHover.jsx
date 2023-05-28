import React from "react";

export default function ToolbarHover({ value, click }) {
  let a = click;
  return (
    <div className="absolute z-40">
      {a === true ? (
        value === "Undo" ? (
          <div className="rounded ml-2 bg-black text-white px-2 py-1 inline-block text-xs">
            {a === true ? value : ""}
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {/* {value === "Undo" ? (
          <div className="rounded ml-2 bg-black text-white px-2 py-1 inline-block text-xs">
           {a===true?value:<h1>he</h1>} 
          </div>
        ) : (
          ""
        )} */}
      {a === true ? (
        value === "Redo" ? (
          <div className="rounded ml-12 bg-black text-white px-2 py-1 inline-block text-xs">
            {a === true ? value : ""}
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {/* {value === "Redo" ? (
        <div>
          <div className="rounded ml-12 bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )} */}

      {a === true ? (
        value === "Paint Fromat" ? (
          <div className="rounded ml-[65px] bg-black text-white px-2 py-1 inline-block text-xs">
            {a === true ? value : ""}
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {/* {value === "Paint Fromat" ? (
        <div>
          <div className="rounded ml-[65px] bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )} */}

{a === true ? (
        value === "Print" ? (
          <div className="rounded  ml-[135px] bg-black text-white px-2 py-1 inline-block text-xs">
            {a === true ? value : ""}
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {/* {value === "Print" ? (
        <div>
          <div className="rounded ml-[135px] bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )} */}

{a === true ? (
        value === "Spelling and grammer check" ? (
          <div className="rounded  ml-28 bg-black text-white px-2 py-1 inline-block text-xs">
            {a === true ? value : ""}
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {/* {value === "Spelling and grammer check" ? (
        <div>
          <div className="rounded ml-28 bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )} */}

{a === true ? (
        value === "Zoom" ? (
          <div className="rounded  ml-[220px] bg-black text-white px-2 py-1 inline-block text-xs">
            {a === true ? value : ""}
          </div>
        ) : (
          ""
        )
      ) : (
        ""
      )}

      {/* {value === "Zoom" ? (
        <div>
          <div className="rounded ml-[220px] bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )} */}
      {value === "Styles" ? (
        <div>
          <div className="rounded ml-[320px] bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )}
      {value === "Font" ? (
        <div>
          <div className="rounded  ml-[450px] bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )}
      {value === "Decrease font size" ? (
        <div>
          <div className="rounded  ml-[500px] bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )}
      {value === "Font size" ? (
        <div>
          <div className="rounded  ml-[570px] bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )}
      {value === "Increase font size" ? (
        <div>
          <div className="rounded  ml-[600px] bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )}
      {value === "Bold" ? (
        <div>
          <div className="rounded  ml-[655px] bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )}
      {value === "Italic" ? (
        <div>
          <div className="rounded  ml-[695px] bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )}
      {value === "Underline" ? (
        <div>
          <div className="rounded  ml-[725px] bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )}
      {value === "Text color" ? (
        <div>
          <div className="rounded  ml-[770px] bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )}
      {value === "Highlight color" ? (
        <div>
          <div className="rounded  ml-[790px] bg-black text-white px-2 py-1 inline-block text-xs">
            {value}
          </div>
        </div>
      ) : (
        ""
      )}

      {/* <div className="absolute over top-2 z-10">hj</div> */}
    </div>
  );
}
