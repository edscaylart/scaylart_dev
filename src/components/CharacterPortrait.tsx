import avatarImage from "../assets/dnd-avatar.png";
import { getAge } from "../utils/age";

const level = getAge(1992, 5, 10);

export default function CharacterPortrait() {
  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      <div className="absolute inset-0 border-4 border-stone-800 rounded-full overflow-hidden">
        <img
          src={avatarImage.src}
          alt="Character Portrait"
          className="w-[160px] h-[160px] object-cover"
        />
      </div>
      <div className="absolute -bottom-2 -right-2 bg-amber-100 border-2 border-stone-800 rounded-full px-2 py-1 text-xs font-bold">
        LVL {level}
      </div>
    </div>
  );
}
