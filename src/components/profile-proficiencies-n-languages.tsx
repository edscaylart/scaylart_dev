import { profile } from "@/data/profile";
import { Card, CardLabel } from "./ui/card";
import clsx from "clsx";

const Equipments = ({
  title,
  equipments,
}: {
  title: string;
  equipments: { name: string; checked: boolean }[];
}) => {
  return (
    <div className="flex flex-row gap-4">
      <span className="min-w-16 text-sm uppercase">{title}</span>
      {equipments.map(({ name, checked }) => (
        <div key={name} className="flex flex-row items-center gap-2">
          <div
            className={clsx(
              "h-4 w-4 rounded-full",
              checked
                ? "bg-primary-800"
                : "border border-dashed border-slate-400",
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
    <Card className="flex-none">
      <CardLabel>Proficiencies & Languages</CardLabel>
      <div className="flex flex-1 flex-col items-start justify-start gap-2 py-2">
        <Equipments title="armor" equipments={profile.armors} />
        <Equipments title="weapons" equipments={profile.weapons} />
        <ul className="flex flex-row flex-wrap gap-2">
          {[...profile.languages, ...profile.tools].map((item) => (
            <li className="rounded-md border px-2" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
