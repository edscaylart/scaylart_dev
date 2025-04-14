import delphiLogo from "@/assets/skills/delphi.webp";
import nextLogo from "@/assets/skills/next.webp";
import nodeLogo from "@/assets/skills/node.webp";
import phpLogo from "@/assets/skills/php.webp";
import reactNativeLogo from "@/assets/skills/react-native.webp";
import reactLogo from "@/assets/skills/react.webp";
import type { SkillProps } from "./Skill";
import Skill from "./Skill";

const skills: SkillProps[] = [
  {
    name: "Delphi",
    image: delphiLogo,
    description:
      "Invoke the ancient art of rapid enchantment. Delphi grants the caster the ability to conjure intricate runes and structures with uncanny speed, rooted in arcane lineage. Best used by veterans of the old empires.",
  },
  {
    name: "Next.js",
    image: nextLogo,
    description:
      "A dimensional rift spell. Next.js allows the wielder to open portals (routes) across realms (pages), weaving light-speed illusions (pre-rendering) with server-side incantations. Requires high-level mastery of React incantations.",
  },
  {
    name: "NodeJS",
    image: nodeLogo,
    description:
      "Channel the energy of the server planes. With NodeJS, the mage can control I/O flows, summon RESTful spirits, and maintain persistent socket links between realms. Efficient in solo missions or massive raids.",
  },
  {
    name: "PHP",
    image: phpLogo,
    description:
      "A legacy spell school born of web wizards. PHP summons dynamic entities from scrolls (scripts) and binds them to living documents. Powerful in the hands of those versed in ancient internet lore.",
  },
  {
    name: "React-Native",
    image: reactNativeLogo,
    description:
      "This hybrid conjuration manifests spells across dual realities (iOS and Android). React-Native lets you mirror incantations across platforms with a single binding ritual, maintaining agility without sacrificing power.",
  },
  {
    name: "React",
    image: reactLogo,
    description:
      "An elemental spell of state and structure. React enables the user to summon powerful UI constructs through the manipulation of component essence and reactive state flux. Often paired with hooks and virtual runes.",
  },
];

export default function ProficienciesAndSkills() {
  return (
    <div className="border-2 border-stone-800 rounded-md p-6 bg-amber-100 mb-6 shadow-md">
      <h2 className="text-lg font-bold mb-4 text-center border-b-2 border-stone-800 pb-2">
        Proficiencies & Skills
      </h2>

      <div className="flex flex-row space-x-4">
        {skills.map((skill, index) => (
          <Skill {...skill} key={index} />
        ))}
      </div>
    </div>
  );
}
