import { profile } from "@/data/profile";
import { Card, CardLabel } from "./ui/card";
import clsx from "clsx";
import { ProfileTechs } from "./profile-techs";

const Equipments = ({
  title,
  equipments,
}: {
  title: string;
  equipments: { name: string; checked: boolean }[];
}) => {
  return (
    <div className="flex flex-row gap-4">
      <span className="min-w-14 text-sm uppercase text-background-900 sm:min-w-16">
        {title}
      </span>
      {equipments.map(({ name, checked }) => (
        <div key={name} className="flex flex-row items-center gap-1 sm:gap-2">
          <div
            className={clsx(
              "h-4 w-4 rounded-full",
              checked
                ? "bg-accent-500"
                : "border border-dashed border-background-900",
            )}
          ></div>
          <span className="text-xs">{name}</span>
        </div>
      ))}
    </div>
  );
};

export const ProfileProficienciesAndLanguages = () => {
  return (
    <Card className="mt-2 flex-none sm:mt-0">
      <CardLabel>Proficiencies & Languages</CardLabel>
      <div className="flex flex-1 flex-col items-start justify-start gap-2 py-2">
        <Equipments title="armor" equipments={profile.armors} />
        <Equipments title="weapons" equipments={profile.weapons} />
        <ProfileTechs />
      </div>
    </Card>
  );
};
