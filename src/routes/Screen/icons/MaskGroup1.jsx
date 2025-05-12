import React from "react";

export const MaskGroup1 = ({ className }) => {
  return (
    <svg
      className={`mask-group-1 ${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        height="24"
        id="mask0_303_927"
        maskUnits="userSpaceOnUse"
        width="24"
        x="0"
        y="0"
      >
        <g className="g" clipPath="url(#clip0_303_927)">
          <path
            className="path"
            d="M10.924 2.78061C11.3641 1.88872 12.636 1.88872 13.0762 2.78061L15.2476 7.18042C15.4224 7.5346 15.7603 7.78006 16.1511 7.83687L21.0066 8.54242C21.9908 8.6854 22.3839 9.895 21.6716 10.5892L18.1582 14.014C17.8753 14.2896 17.7463 14.6868 17.8131 15.0761L18.6425 19.9119C18.8106 20.8923 17.7817 21.6398 16.9014 21.177L12.5585 18.8938C12.2089 18.71 11.7913 18.71 11.4417 18.8938L7.0988 21.177C6.21848 21.6398 5.18955 20.8923 5.35768 19.9119L6.1871 15.0761C6.25388 14.6868 6.12482 14.2896 5.84198 14.014L2.32854 10.5892C1.61632 9.895 2.00933 8.6854 2.9936 8.54242L7.84904 7.83687C8.23988 7.78006 8.5778 7.5346 8.75258 7.18042L10.924 2.78061Z"
            fill="#FFCD00"
          />
        </g>
      </mask>

      <g className="g" mask="url(#mask0_303_927)">
        <rect className="rect" fill="#5384D4" height="24" width="24" />
      </g>

      <defs className="defs">
        <clipPath className="clip-path" id="clip0_303_927">
          <rect className="rect" fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};
