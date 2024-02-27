"use client";

import { useTheme } from "next-themes";
import * as React from "react";
import { type IScaylartLogoProps } from "./type";
import { ScaylartLightLogo } from "./scaylart-light-logo";
import { ScaylartDarkLogo } from "./scaylart-dark-logo";

export const ScaylartLogo = (props: IScaylartLogoProps) => {
  const { theme } = useTheme();

  return <ScaylartLightLogo {...props} />;
};
