import { profile } from "@/data/profile"

export const ProfileHeader = () => {
  return (
    <div className="flex flex-col gap-2 cursor-default">
      <h1 className="text-2xl font-bold text-center">{profile.name}</h1>
      <ul className="flex flex-wrap gap-2 items-center justify-center font-mono text-xs list-disc list-inside font-medium cursor-default text-md">
        <li className="list-none">{profile.race}</li>
        <li>{profile.class}</li>
        <li>Level {profile.level}</li>
      </ul>
    </div>
  )
}