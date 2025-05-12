import React from "react";
import { MaskGroup1 } from "../icons/MaskGroup1";
import { MaskGroup2 } from "../icons/MaskGroup2";
import "./screen.css";

export const Screen = () => {
  return (
    <div className="screen">
      <div className="view">
        <div className="x">
          <img className="mask-group" alt="Mask group" />
        </div>

        <div className="frame-wrapper">
          <div className="frame">
            <div className="div">
              <div className="background">
                <div className="container">
                  <div className="frame-2">
                    <div className="frame-3">
                      <div className="frame-4">
                        <div className="text-wrapper">전답 18평</div>

                        <div className="div-wrapper">
                          <div className="text-wrapper-2">매매</div>
                        </div>
                      </div>

                      <div className="frame-5">
                        <div className="text-wrapper-3">
                          서울특별시 강남구 개포동 586-4
                        </div>

                        <div className="frame-6">
                          <div className="text-wrapper-4">실거래가</div>

                          <div className="text-wrapper-5">2억 9646만원</div>
                        </div>
                      </div>
                    </div>

                    <div className="mask-group-wrapper">
                      <MaskGroup2 className="icon-instance-node" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="background">
                <div className="container">
                  <div className="frame-2">
                    <div className="frame-3">
                      <div className="frame-4">
                        <div className="text-wrapper">전답 18평</div>

                        <div className="div-wrapper">
                          <div className="text-wrapper-2">매매</div>
                        </div>
                      </div>

                      <div className="frame-5">
                        <div className="text-wrapper-3">
                          서울특별시 동대문구 서울시립대로 64
                        </div>

                        <div className="frame-6">
                          <div className="text-wrapper-4">실거래가</div>

                          <div className="text-wrapper-5">
                            24억 5344만 4010원
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mask-group-1-wrapper">
                      <MaskGroup1 className="icon-instance-node" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="view-2">
          <div className="text-wrapper-6">아파트 2</div>
        </div>
      </div>
    </div>
  );
};
