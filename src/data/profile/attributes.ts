import { type IconType } from "react-icons";
import { FaKeyboard, FaBook } from "react-icons/fa";
import { FaShieldHeart } from "react-icons/fa6";
import { GiBoltEye, GiHarp } from "react-icons/gi";
import { LuSwords } from "react-icons/lu";

type TProfileAttribute = {
  label: string;
  value: number;
  IconComponent: IconType;
};

export const attributes: TProfileAttribute[] = [
  { label: "strength", value: 8, IconComponent: LuSwords },
  { label: "dexterity", value: 15, IconComponent: FaKeyboard },
  { label: "constitution", value: 14, IconComponent: FaShieldHeart },
  { label: "intelligence", value: 16, IconComponent: FaBook },
  { label: "wisdom", value: 12, IconComponent: GiBoltEye },
  { label: "charisma", value: 10, IconComponent: GiHarp },
];
