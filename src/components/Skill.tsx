import { Button } from "./ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";

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
      <PopoverContent>
        <div className="flex items-baseline px-3 py-2">{description}</div>
      </PopoverContent>
    </Popover>
  );
}
