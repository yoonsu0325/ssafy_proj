/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import "./style.css";

export const PropertyDefaultWrapper = ({
  buttontext = "button",
  property1,
  className,
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`property-default-wrapper ${state.property1} ${className}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="button">{buttontext}</div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "click":
        return {
          property1: "selected",
        };
    }
  }

  if (state.property1 === "selected") {
    switch (action) {
      case "click":
        return {
          property1: "default",
        };
    }
  }

  return state;
}
