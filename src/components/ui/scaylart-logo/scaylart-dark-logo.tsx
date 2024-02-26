"use client";

import * as React from "react";
import { type IScaylartLogoProps } from "./type";

export const ScaylartDarkLogo = (props: IScaylartLogoProps) => {
  return (
    <svg
      width={512}
      height={512}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={256} cy={256} r={256} fill="#000" />
      <path
        d="M449 256c0 106.591-86.409 193-193 193S63 362.591 63 256 149.409 63 256 63s193 86.409 193 193zm-351.02 0c0 87.272 70.748 158.021 158.02 158.021S414.021 343.272 414.021 256c0-87.272-70.749-158.02-158.021-158.02-87.272 0-158.02 70.748-158.02 158.02z"
        fill="#fff"
      />
      <path
        transform="rotate(-90 74 273)"
        fill="#fff"
        d="M74 273H109V437H74z"
      />
      <path transform="rotate(-90 63 308)" fill="#000" d="M63 308H98V448H63z" />
      <path fill="#fff" d="M203 238H238V422H203z" />
      <path fill="#000" d="M238 63H273V449H238z" />
      <path fill="#fff" d="M203 89H238V238H203z" />
      <path
        transform="rotate(-90 123 238)"
        fill="#000"
        d="M123 238H158V353H123z"
      />
      <circle cx={314} cy={256} r={40} fill="#fff" />
    </svg>
  );
};
