"use client";

import * as React from "react";
import { type IScaylartLogoProps } from "./type";

export const ScaylartLightLogo = (props: IScaylartLogoProps) => {
  return (
    <svg
      width={540}
      height={540}
      viewBox="0 0 540 540"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={270} cy={270} r={256} fill="#fff" />
      <path
        d="M463 270c0 106.591-86.409 193-193 193S77 376.591 77 270 163.409 77 270 77s193 86.409 193 193zm-351.021 0c0 87.272 70.749 158.021 158.021 158.021 87.272 0 158.021-70.749 158.021-158.021 0-87.272-70.749-158.021-158.021-158.021-87.272 0-158.021 70.749-158.021 158.021z"
        fill="#000"
      />
      <path
        transform="rotate(-90 88 287)"
        fill="#000"
        d="M88 287H123V451H88z"
      />
      <path
        transform="rotate(-90 77 322)"
        fill="#fff"
        d="M77 322H112V462H77z"
      />
      <path fill="#000" d="M217 252H252V436H217z" />
      <path fill="#fff" d="M252 77H287V463H252z" />
      <path fill="#000" d="M217 103H252V252H217z" />
      <path
        transform="rotate(-90 137 252)"
        fill="#fff"
        d="M137 252H172V367H137z"
      />
      <circle cx={328} cy={270} r={40} fill="#000" />
    </svg>
  );
};
