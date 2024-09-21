import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { UiSwitch } from '../../src/index';

function App() {

    let [val, setVal] = useState(false);

    return (<div>
        <h3>
            喜欢吃柚子？
        </h3>
        <UiSwitch value={val} onChange={newValue => { setVal(newValue) }}></UiSwitch>
        <div>
            选择的是：{val ? 'true' : 'false'}
        </div>
    </div>);

}

createRoot(document.getElementById('app')).render(<App />);