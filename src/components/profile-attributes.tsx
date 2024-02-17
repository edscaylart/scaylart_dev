import { profile } from "@/data/profile";
import { getAttributeModifier } from "@/utils/dnd";
import { type IconType } from "react-icons";
import clsx from "clsx";

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
      <div className="bg-background-100 border-primary-900 relative flex h-[80px] w-[90px] items-center justify-center rounded-full border-2">
        <span className="text-3xl">{value}</span>
        <div className="bg-background-100 absolute -right-3 bottom-3">
          <IconComponent size="26px" />
        </div>
        <div
          className={clsx(
            "bg-primary-700 border-primary-900 flex items-center justify-center",
            "rounded-full border-2 pt-1",
            "absolute -bottom-3 h-[32px] w-[40px]",
            "hover:bg-primary-800 active:translate-y-[2px]",
          )}
        >
          <span className="text-background-300 text-center font-bold">
            {modifier >= 0 ? `+${modifier}` : modifier}
          </span>
        </div>
      </div>
    </li>
  );
};

export const ProfileAttributes = () => {
  return (
    <ul className="bg-background-100 flex cursor-default flex-row justify-center gap-6 rounded-3xl py-1">
      {profile.attributes.map((attribute) => (
        <Attribute key={attribute.label} {...attribute} />
      ))}
    </ul>
  );
};
