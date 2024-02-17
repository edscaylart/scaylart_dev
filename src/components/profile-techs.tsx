import { type TProfileTech, techs } from "@/data/profile/techs";
import clsx from "clsx";

export const ProfileTechs = () => {
  return (
    <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-4">
      {techs.map((tech) => (
        <TechCard tech={tech} />
      ))}
    </div>
  );
};

interface ITechCardProps {
  tech: TProfileTech;
}

const TechCard = ({ tech: { title, IconComponent } }: ITechCardProps) => {
  return (
    <div
      className={clsx(
        "h-22 flex flex-col items-center justify-center space-y-2",
        "bg-secondary-400 rounded-lg border-[1px] border-none p-2 text-[13.5px]",
        "rounded-md shadow-md",
        "hover:bg-secondary-500 active:translate-y-[2px]",
        "transition-all duration-300 ease-out",
      )}
    >
      <IconComponent size={24} />
      <span className="whitespace-nowrap">{title}</span>
    </div>
  );
};
