import { profile } from "@/data/profile";
import { Card, CardLabel } from "./card";
import clsx from "clsx";

export const SkillsCard = () => {
  return (
    <Card className="max-w-[280px]">
      <CardLabel>Skills</CardLabel>
      <div className="flex flex-1 flex-col space-y-2 py-2">
        {profile.skills.map((skill) => (
          <div
            key={skill.name}
            className="flex flex-1 flex-row items-center justify-start space-x-3"
          >
            <div
              className={clsx(
                "h-4 w-4 rounded-full",
                skill.checked
                  ? "bg-slate-600"
                  : "border border-dashed border-slate-400",
              )}
            ></div>
            <span className="text-xs uppercase">{skill.name}</span>
            <span className="text-[10px] uppercase text-gray-400">
              {skill.mod}
            </span>
            <span className="flex-1 text-right text-xs">{skill.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
