import { profile } from "@/data/profile";
import { getAttributeModifier } from "@/utils/dnd";
import { type IconType } from "react-icons";

const Attribute = ({
  label,
  value,
  IconComponent,
}: {
  label: string;
  value: number;
  IconComponent: IconType;
}) => {
  const modifier = getAttributeModifier(value);

  return (
    <li className="flex flex-col items-center">
      <span className="text-center text-sm uppercase">{label}</span>
      <div className="relative flex h-[80px] w-[90px] items-center justify-center rounded-full border border-slate-400 bg-slate-900">
        <span className="text-3xl">{value}</span>
        <IconComponent size="26px" className="absolute -right-2 bottom-3" />
        <div className="absolute -bottom-3 flex h-[32px] w-[40px] items-center justify-center rounded-full border border-slate-400 bg-slate-900">
          <span className="text-center">
            {modifier >= 0 ? `+${modifier}` : modifier}
          </span>
        </div>
      </div>
    </li>
  );
};

export const ProfileAttributes = () => {
  return (
    <ul className="flex cursor-default flex-row justify-center gap-6 rounded-3xl bg-gray-700 py-1">
      {profile.attributes.map((attribute) => (
        <Attribute key={attribute.label} {...attribute} />
      ))}
    </ul>
  );
};
