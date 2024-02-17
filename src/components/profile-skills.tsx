import { profile } from "@/data/profile";
import { Card, CardLabel } from "./ui/card";
import clsx from "clsx";

export const ProfileSkills = () => {
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
                  ? "bg-accent-500"
                  : "border-background-900 border border-dashed",
              )}
            ></div>
            <span className="text-xs uppercase">{skill.name}</span>
            <span className="text-accent-700 text-[10px] uppercase">
              {skill.mod}
            </span>
            <span className="flex-1 text-right text-xs">{skill.value}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};
