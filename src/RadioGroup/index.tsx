import React, { useEffect } from "react";
import { RadioContext } from "../Context";

export default function UiRadioGroup(props) {
    let slots = React.Children.toArray(props.children);

    let childsAction = {};
    let updateClass = (newValue: string) => {
        for (let key in childsAction) {
            if (childsAction[key]) {
                childsAction[key](key == newValue);
            }
        }
    };

    useEffect(() => {
        updateClass(props.value || "");
    }, [props.value]);

    return (<RadioContext.Provider value={{
        updateAction: (name: string, doback: (isChecked: boolean) => void) => {
            childsAction[name] = doback;
        },
        updateModel: (newValue: string) => {
            updateClass(newValue);
            if (props.onChange) props.onChange.call(null, newValue);
        }
    }}>
        <ui-radio-group class="ui-radio-group">{
            slots.map((slot) => {
                return slot;
            })
        }</ui-radio-group>
    </RadioContext.Provider>)
}