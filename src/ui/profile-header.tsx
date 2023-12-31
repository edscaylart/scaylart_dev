import { IProfileCharacter } from "~/data/profile"

interface IProfileHeaderProps {
  character: IProfileCharacter
}

export const ProfileHeader = ({ character }: IProfileHeaderProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-2xl font-bold text-center">{character.name}</h1>
      <ul className="flex flex-wrap gap-2 items-center justify-center font-mono text-xs font-medium list-disc list-inside">
        <li className="list-none">{character.race}</li>
        <li>{character.class}</li>
        <li>Level {character.level}</li>
      </ul>
    </div>
  )
}