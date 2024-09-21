import React, { useContext, useState, useEffect } from "react";
import { RadioContext } from "../Context";

export default function UiRadio(props) {
    let slots = React.Children.toArray(props.children);

    let [isChecked, setChecked] = useState(false);
    let { updateModel, updateAction } = useContext(RadioContext);

    updateAction(props.value, (_isChecked: boolean) => {
        setChecked(_isChecked);
    });

    useEffect(() => {
        return () => {
            updateAction(props.value, null);
        }
    }, []);

    return (<ui-radio style={{
        cursor: "pointer",
        userSelect: "none"
    }} class={"ui-radio " + (isChecked ? "checked" : "unchecked")} onClick={function () {
        if (!isChecked) updateModel(props.value);
    }}>{
            slots.map(slot => {
                return slot;
            })
        }</ui-radio>)
}