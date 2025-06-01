import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { UiRadioGroup, UiRadio } from "../../src/index";

function App() {
  let [val, setVal] = useState("apple");

  return (
    <div>
      <h3>最喜欢吃的水果：</h3>
      <UiRadioGroup
        value={val}
        onChange={(newValue) => {
          setVal(newValue);
        }}
      >
        <UiRadio value="apple"></UiRadio>
        苹果
        <UiRadio value="strawberry"></UiRadio>
        草莓
        <UiRadio value="watermelon"></UiRadio>
        西瓜
      </UiRadioGroup>
      <div>选择的是：{val}</div>
    </div>
  );
}

createRoot(document.getElementById("app")).render(<App />);
