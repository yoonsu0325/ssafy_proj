import React from "react";
import { Background1 } from "./sections/Background1";
import { Nav } from "./sections/Nav";
import { Section } from "./sections/Section";
import "./style.css";

export const Screen9 = () => {
  return (
    <div className="screen-9" data-model-id="1:1009">
      <div className="view-11">
        <div className="background-15" />
      </div>

      <div className="view-12">
        <Background1 />
        <div className="overlay-4" />

        <Nav />
        <Section />
        <div className="text-wrapper-127">회원탈퇴</div>
      </div>
    </div>
  );
};
