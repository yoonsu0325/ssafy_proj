import React from "react";
import { MaskGroup } from "../../../../components/MaskGroup";
import "./style.css";

export const Frame4 = () => {
  return (
    <div className="frame-4">
      <div className="frame-37">
        <div className="frame-38">
          <div className="text-wrapper-59">서울</div>

          <img
            className="mask-group-3"
            alt="Mask group"
            src="https://c.animaapp.com/JuAZje8Q/img/mask-group-26@2x.png"
          />

          <div className="text-wrapper-60">강남구</div>

          <img
            className="mask-group-3"
            alt="Mask group"
            src="https://c.animaapp.com/JuAZje8Q/img/mask-group-26@2x.png"
          />

          <div className="text-wrapper-61">삼성동</div>
        </div>

        <MaskGroup
          className="image-7"
          property1="false"
          propertyFalse="https://c.animaapp.com/JuAZje8Q/img/-@2x.png"
        />
      </div>

      <div className="close-svg-fill-wrapper">
        <div className="close-svg-fill">
          <div className="close-svg">
            <img
              className="mask-group-4"
              alt="Mask group"
              src="https://c.animaapp.com/JuAZje8Q/img/mask-group-27@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
