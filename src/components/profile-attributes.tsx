import { profile } from "@/data/profile";
import { getAttributeModifier } from "@/utils/dnd"

const Attribute = ({ label, value }: { label: string, value: number }) => {
  const modifier = getAttributeModifier(value);

  return (
    <li className="container flex flex-col items-center justify-between border border-black rounded-lg h-[90px] w-[84px] pt-1 m-0">
      <span className="text-[9px] uppercase">{label}</span>
      <span className="text-xl">{value}</span>
      <div className="flex h-[24px] w-[40px] border border-black rounded-lg items-center justify-center">
        <span className="text-sm">{modifier >= 0 ? `+${modifier}` : modifier}</span>
      </div>
    </li>
  )
}

export const ProfileAttributes = () => {
  return (
    <ul className="flex flex-wrap gap-x-10 gap-y-2 sm:gap-1 items-center justify-center cursor-default">
      {profile.attributes.map(({ value, label }) => (
        <Attribute key={label} label={label} value={value} />
      ))}
    </ul>
  )
}