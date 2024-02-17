import { getAge } from "@/utils/age";
import { attributes } from "./attributes";
import { timeline } from "./timeline";
import { skills } from "./skills";
import { techs } from "./techs";

export const profile = {
  name: "Edson Souza",
  race: "Human",
  class: "Fullstack Developer",
  background: "Software Engineer",
  alignment: "Lawful Neutral",
  level: getAge(2011, 5),
  weapons: [
    { name: "Keyboard", checked: true },
    { name: "Mouse", checked: true },
    { name: "Joystick", checked: false },
  ],
  armors: [
    { name: "Light", checked: true },
    { name: "Medium", checked: false },
    { name: "Heavy", checked: false },
    { name: "Shields", checked: false },
  ],
  attributes,
  timeline,
  skills,
  techs,
};
