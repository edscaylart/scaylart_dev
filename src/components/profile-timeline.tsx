import { type TProfileTimeline, timeline } from "@/data/profile/timeline";
import clsx from "clsx";
import { Card, CardLabel } from "./ui/card";

export const ProfileTimeline = () => {
  return (
    <section>
      <Card className="flex-none">
        <CardLabel>Timeline</CardLabel>
        <ul className="flex flex-col space-y-4 py-3">
          {timeline.map((item) => (
            <Timeline key={item.name} {...item} />
          ))}
        </ul>
      </Card>
    </section>
  );
};

type ITimelineProps = TProfileTimeline;

const Timeline = ({
  name,
  date,
  locality,
  description,
  techs,
}: ITimelineProps) => {
  return (
    <li
      className={clsx(
        "relative cursor-default border-[1px] border-none px-4 py-3",
        "rounded-lg shadow-lg",
        "transition-all duration-500 ease-out",
        {
          "bg-secondary-100 hover:bg-secondary-200 hover:shadow-secondary-300":
            !!locality,
          "bg-accent-100 hover:bg-accent-200 hover:shadow-accent-300":
            !locality,
        },
      )}
    >
      <div className="flex w-full flex-col space-y-4">
        <div className="flex flex-col">
          <div className="mb-2 flex flex-row items-center justify-end">
            <span className="text-xs text-gray-600">{date}</span>
          </div>
          <span className="text-md font-semibold">{name}</span>
          {locality && (
            <span className="text-sm text-gray-600">{locality}</span>
          )}
        </div>
        <span className="text-sm text-gray-600">{description}</span>
        {techs && (
          <div className="flex flex-wrap items-start gap-x-2 gap-y-1">
            {techs?.map((tech) => (
              <span
                key={tech}
                className="inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </li>
  );
};
