type TProfileSkill = {
  name: string;
  mod: string;
  value: string;
  checked: boolean;
};

export const skills: TProfileSkill[] = [
  { name: "Code Agility", mod: "dex", value: "+2", checked: false },
  { name: "Error Handling", mod: "wis", value: "+1", checked: false },
  { name: "Algorithm Mastery", mod: "int", value: "+5", checked: true },
  { name: "Code Optimization", mod: "str", value: "+0", checked: false },
  {
    name: "Code Deception Detection",
    mod: "cha",
    value: "-1",
    checked: false,
  },
  { name: "Git Proficiency", mod: "int", value: "+3", checked: false },
  { name: "UI Intuition", mod: "wis", value: "+3", checked: true },
  {
    name: "Error Intimidation",
    mod: "cha",
    value: "-1",
    checked: false,
  },
  { name: "Problem Solving", mod: "int", value: "+5", checked: true },
  { name: "Code Healing", mod: "wis", value: "+1", checked: false },
  {
    name: "System Insight",
    mod: "wis",
    value: "+3",
    checked: false,
  },
  { name: "Bug Perception", mod: "wis", value: "+3", checked: true },
  { name: "Code Performance", mod: "cha", value: "-1", checked: false },
  {
    name: "Persuasive Documentation",
    mod: "cha",
    value: "-1",
    checked: false,
  },
  { name: "Code Doctrine Devotion", mod: "int", value: "+5", checked: true },
  { name: "Sleight of Code Hand", mod: "dex", value: "+2", checked: false },
  { name: "Stealthy Debugging", mod: "dex", value: "+2", checked: false },
  {
    name: "Survival in Legacy Systems",
    mod: "wis",
    value: "+1",
    checked: false,
  },
];
