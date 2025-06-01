import React, { useState, useEffect } from "react";

export default function UiPopup(props) {
  let slots = React.Children.toArray(props.children);

  let [display, setDisplay] = useState(false);
  let [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (props.value) {
      setDisplay(true);
      setTimeout(() => {
        setOpacity(1);
      }, 50);
    } else {
      setDisplay(false);
      setTimeout(() => {
        setOpacity(0);
      }, 300);
    }
  }, [props.value]);

  return (
    <ui-popup
      class="ui-popup"
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: "100vw",
        height: "100vh",
        zIndex: "9999999",
        transitionDuration: "300ms",
        transitionTimingFunction: "ease-out",
        transitionProperty: "opacity",
        opacity,
        display: display ? "block" : "none",
      }}
      onClick={() => {
        if (props.onClick) props.onClick.call(null);
      }}
    >
      {slots.map((slot) => {
        return slot;
      })}
    </ui-popup>
  );
}
