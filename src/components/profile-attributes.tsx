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
      <div className="relative flex h-[80px] w-[90px] items-center justify-center rounded-full border-2 border-primary-900 bg-background-100">
        <span className="text-3xl">{value}</span>
        <div className="absolute -right-3 bottom-3 bg-background-100">
          <IconComponent size="26px" />
        </div>
        <div
          className={clsx(
            "flex items-center justify-center border-primary-900 bg-accent-700",
            "rounded-full border-2 pt-1",
            "absolute -bottom-3 h-[32px] w-[40px]",
            "hover:bg-accent-500 active:translate-y-[2px]",
          )}
        >
          <span className="text-center font-bold text-background-300">
            {modifier >= 0 ? `+${modifier}` : modifier}
          </span>
        </div>
      </div>
    </li>
  );
};

export const ProfileAttributes = () => {
  return (
    <ul className="flex cursor-default flex-row justify-center gap-6 rounded-3xl bg-background-100 py-1">
      {profile.attributes.map((attribute) => (
        <Attribute key={attribute.label} {...attribute} />
      ))}
    </ul>
  );
};
