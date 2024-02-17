import { getAge } from "@/utils/age";
import { attributes } from "./attributes";
import { timeline } from "./timeline";
import { skills } from "./skills";

export const profile = {
  name: "Edson Souza",
  race: "Human",
  class: "Fullstack Developer",
  background: "Software Engineer",
  alignment: "Lawful Neutral",
  level: getAge(2011, 5),
  languages: ["Javascript", "Typescript", "Java", "PHP", "Delphi"],
  tools: ["React", "Next.js", "React Native", "Node.js", "Git", "Docker"],
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
};
