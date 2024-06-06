import "./App.css";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2">
          <button
          onClick={()=>setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
                onClick={()=>setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
                onClick={()=>setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
                onClick={()=>setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
                onClick={()=>setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
                onClick={()=>setColor("olive")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "olive" }}
          >
            olive
          </button>
          <button
                onClick={()=>setColor("skyblue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "skyblue" }}
          >
            skyblue
          </button>
          <button
                onClick={()=>setColor("coral")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "coral" }}
          >
            coral
          </button>
          <button
                onClick={()=>setColor("aqua")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "aqua" }}
          >
            aqua
          </button>
          <button
                onClick={()=>setColor("khaki")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "khaki" }}
          >
       khaki
          </button>
          <button
                onClick={()=>setColor("palegreen")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "palegreen" }}
          >
       palegreen
          </button>
          <button
                onClick={()=>setColor("lime")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lime" }}
          >
      lime
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
