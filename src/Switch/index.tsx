import React, { useState, useEffect } from "react";
import { throttle } from "oipage/corejs/throttle/index";

export default function UiSwitch(props) {
    let slots = React.Children.toArray(props.children);

    let [isOn, setIsOn] = useState(false);

    useEffect(() => {
        setIsOn(props.value);
    }, [props.value]);

    return (<ui-switch class={"ui-switch " + (isOn ? "on" : "off")} onClick={throttle(function () {

        setIsOn(!isOn);
        if (props.onChange) props.onChange.call(null, !isOn);

    }, {
        keep: true,
        opportunity: "begin"
    })}>{
            slots.map((slot) => {
                return slot;
            })
        }</ui-switch>)
}