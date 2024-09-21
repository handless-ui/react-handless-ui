import React, { useEffect } from "react";
import { CheckContext } from "../Context";

export default function UiCheckGroup(props) {
    let slots = React.Children.toArray(props.children);

    let newValues = props.value || [];

    let childsAction = {};
    let updateClass = () => {
        for (let key in childsAction) {
            if (childsAction[key]) {
                childsAction[key](newValues.indexOf(key) > -1);
            }
        }
    };

    useEffect(() => {
        updateClass();
    }, [newValues]);

    return (<CheckContext.Provider value={{
        updateAction: (name: string, doback: (isChecked: boolean) => void) => {
            childsAction[name] = doback;
        },
        updateModel: (newValue: string) => {

            let index = newValues.indexOf(newValue);
            if (index > -1) {
                newValues.splice(index, 1);
            } else {
                newValues.push(newValue);
            }

            updateClass();

            let _newValues: Array<string> = [];
            for (let item of newValues) _newValues.push(item);
            if (props.onChange) props.onChange.call(null, _newValues);
        }
    }}>
        <ui-check-group class="ui-check-group">{
            slots.map((slot) => {
                return slot;
            })
        }</ui-check-group>
    </CheckContext.Provider>)
}