import { Button } from "./ui/button";
import { Popover, PopoverContentPixel, PopoverTrigger } from "./ui/popover";

export interface SkillProps {
  name: string;
  image: ImageMetadata;
  description?: string;
}

export default function Skill({ name, image, description }: SkillProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button asChild className="relative p-0">
          <img className="w-16 h-16" src={image.src} alt={`Skill: ${name}`} />
        </Button>
      </PopoverTrigger>
      <PopoverContentPixel className="w-auto max-w-[500px]">
        <div className="flex flex-row space-x-4 px-1">
          <img className="w-32 h-32" src={image.src} alt={`Skill: ${name}`} />
          <div className="flex flex-col items-baseline space-y-2">
            <h3 className="text-xl">{name}</h3>
            <div className="flex flex-1 text-xs">{description}</div>
          </div>
        </div>
      </PopoverContentPixel>
    </Popover>
  );
}
