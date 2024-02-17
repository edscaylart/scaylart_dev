import { type IconType } from "react-icons";
import {
  TbBrandDocker,
  TbBrandGit,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandPhp,
  TbBrandReact,
  TbBrandReactNative,
  TbBrandTypescript,
} from "react-icons/tb";
import { SiDelphi } from "react-icons/si";

export type TProfileTech = {
  title: string;
  IconComponent: IconType;
};

export const techs: TProfileTech[] = [
  {
    title: "Javascript",
    IconComponent: TbBrandJavascript,
  },
  {
    title: "Typescript",
    IconComponent: TbBrandTypescript,
  },
  {
    title: "Java",
    IconComponent: TbBrandJavascript,
  },
  {
    title: "PHP",
    IconComponent: TbBrandPhp,
  },
  {
    title: "Delphi",
    IconComponent: SiDelphi,
  },
  {
    title: "React",
    IconComponent: TbBrandReact,
  },
  {
    title: "Next.js",
    IconComponent: TbBrandNextjs,
  },
  {
    title: "React Native",
    IconComponent: TbBrandReactNative,
  },
  {
    title: "Node.js",
    IconComponent: TbBrandNodejs,
  },
  {
    title: "Git",
    IconComponent: TbBrandGit,
  },
  {
    title: "Docker",
    IconComponent: TbBrandDocker,
  },
];
