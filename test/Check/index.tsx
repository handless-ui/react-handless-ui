import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { UiCheckGroup, UiCheck } from '../../src/index';

function App() {

    let [vals, setVals] = useState(["apple", "watermelon"]);

    return (<div>
        <h3>
            喜欢吃的水果包括：
        </h3>
        <UiCheckGroup value={vals} onChange={newValues => {
            setVals(newValues);
        }}>
            <UiCheck value="apple"></UiCheck>
            苹果
            <UiCheck value="strawberry"></UiCheck>
            草莓
            <UiCheck value="watermelon"></UiCheck>
            西瓜
        </UiCheckGroup>
        <div>
            选择的是：[{vals.join(",")}]
        </div>
    </div>);

}

createRoot(document.getElementById('app')).render(<App />);