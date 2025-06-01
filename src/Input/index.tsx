import React, { useState, useEffect } from "react";

export default function UiInput(props) {

  let [value, setValue] = useState("");

  // 输入框是否处于输入状态
  let [isInput, setIsInput] = useState("");

  useEffect(() => {
    let newInput = pipeFun(props.value, value)
    setValue(newInput);

    if (newInput != props.value) {
      props.onInput.call(null, newInput);
    }
  }, [props.value]);

  // 输入格式化
  let formatFun = props.format || ((input: any) => input);

  // 输入控制
  let pipeFun = props.pipe || ((newInput: any, oldInput: any) => newInput);

  return (
    <input
      className="ui-input" type="text" value={isInput ? value : formatFun(value)}
      onFocus={() => setIsInput(true)}
      onBlur={() => setIsInput(false)}
      onInput={function (event: any) {
        let newInput = pipeFun(event.target.value, value)
        setValue(newInput);
        if (props.onInput) props.onInput.call(null, newInput);
      }}

    />
  );
}
