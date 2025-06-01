import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { UiPopup } from "../../src/index";

function App() {
  let [val, setVal] = useState();

  useEffect(() => {
    setTimeout(() => {
      setVal(true);
    }, 500);
  }, []);

  return (
    <div>
      <UiPopup
        value={val}
        onClick={() => {
          console.log("点击了popup");
        }}
      >
        <div
          className="demo-value"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          你好呀！
          <button
            onClick={() => {
              setVal(false);
            }}
          >
            关闭
          </button>
        </div>
      </UiPopup>
      <button
        onClick={() => {
          setVal(true);
        }}
      >
        点击我试试
      </button>
    </div>
  );
}

createRoot(document.getElementById("app")).render(<App />);
