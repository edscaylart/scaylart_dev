import { Github, Linkedin, MapPin } from "lucide-react";
import CharacterPortrait from "./CharacterPortrait";
import { Button } from "./ui/button";
import { getAge } from "../utils/age";

const professionLevel = getAge(2011, 5);

export default function CharacterSheetHeader() {
  return (
    <div
      id="character-sheet-header"
      className="border-2 border-stone-800 rounded-md p-6 bg-amber-100 mb-6 shadow-md"
    >
      <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
        <CharacterPortrait />

        <div className="flex-1 space-y-2">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
            <h1 className="text-4xl font-bold tracking-tight">Edson Souza</h1>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={16} className="text-red-700" />
              <span>Rondonópolis, MT</span>
            </div>
          </div>

          <div className="flex gap-2 text-sm">
            <span className="px-2 py-1 bg-red-700 text-white rounded">
              Software Engineer
            </span>
            <span className="px-2 py-1 bg-blue-700 text-white rounded">
              Class Level {professionLevel}
            </span>
          </div>

          <p className="text-lg mt-4">
            A versatile full-stack developer with a passion for crafting elegant
            solutions to complex problems. Specializing in React enchantments
            and Mobile conjurations.
          </p>

          <div className="flex gap-3 mt-4">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-stone-800"
            >
              <Github size={18} className="mr-2" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-stone-800"
            >
              <Linkedin size={18} className="mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
