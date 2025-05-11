/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import "./style.css";

export const BackgroundBorder = ({ property1, divClassName }) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "one",
  });

  return (
    <div
      className={`background-border ${state.property1}`}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className={`div-5 ${divClassName}`}>
        {state.property1 === "one" && <>구매</>}

        {state.property1 === "two" && <>판매</>}
      </div>
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "one") {
    switch (action) {
      case "click":
        return {
          property1: "two",
        };
    }
  }

  if (state.property1 === "two") {
    switch (action) {
      case "click":
        return {
          property1: "one",
        };
    }
  }

  return state;
}
