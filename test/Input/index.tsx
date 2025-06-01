import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { UiInput } from '../../src/index';

function App() {

    // let [val, setVal] = useState(520.12);
    let [val, setVal] = useState(520);

    return (<div>
        输入框只能输入数字：
        <UiInput pipe={(newInput: any, oldInput: any) => {
            if (!newInput) return newInput;
            return /^\d+$/.test(newInput) ? newInput : oldInput
        }} format={(input: any) => {
            return input
        }} value={val} onInput={(newValue: any) => { setVal(newValue) }}></UiInput>{val}
        <button onClick={() => {
            setVal(1314)
        }}>修改值 1314</button>
        <button onClick={() => {
            setVal('newvalue')
        }}>修改值 'newvalue'</button>
    </div>);

}

createRoot(document.getElementById('app')).render(<App />);