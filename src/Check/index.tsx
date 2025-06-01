import React, { useContext, useState, useEffect } from "react";
import { CheckContext } from "../Context";
import { throttle } from "oipage/web/throttle/index";

export default function UiCheck(props) {
    let slots = React.Children.toArray(props.children);

    let [isChecked, setChecked] = useState(false);
    let { updateModel, updateAction } = useContext(CheckContext);

    updateAction(props.value, (_isChecked: boolean) => {
        setChecked(_isChecked);
    });

    useEffect(() => {
        return () => {
            updateAction(props.value, null);
        }
    }, []);

    return (<ui-check style={{
        cursor: "pointer",
        userSelect: "none"
    }} class={"ui-check " + (isChecked ? "checked" : "unchecked")} onClick={throttle(function () {
        updateModel(props.value);
    }, {
        keep: true,
        opportunity: "begin"
    })}>{
            slots.map(slot => {
                return slot;
            })
        }</ui-check>)
}