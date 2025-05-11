/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const MaskGroup = ({
  property1,
  className,
  propertyFalse = "https://c.animaapp.com/JuAZje8Q/img/-@2x.png",
}) => {
  return (
    <img
      className={`mask-group ${className}`}
      alt="Property"
      src={
        property1 === "false"
          ? propertyFalse
          : "https://c.animaapp.com/JuAZje8Q/img/property-1-variant2@2x.png"
      }
    />
  );
};
