import { profile } from "@/data/profile";
import { getAttributeModifier } from "@/utils/dnd"

const Attribute = ({ label, value }: { label: string, value: number }) => {
  const modifier = getAttributeModifier(value);

  return (
    <li className="relative container flex flex-col items-center border border-slate-300 rounded-lg h-[90px] w-[84px] pt-1 m-0">
      <span className="text-[9px] uppercase font-semibold">{label}</span>
      <div className="flex flex-1 -mt-4 justify-center items-center">
        <span className="text-2xl font-semibold">{value}</span>
      </div>
      <div className="absolute -bottom-3 flex h-[24px] w-[40px] border border-slate-500 rounded-lg items-center justify-center bg-stone-900">
        <span className="text-sm font-semibold">{modifier >= 0 ? `+${modifier}` : modifier}</span>
      </div>
    </li>
  )
}

export const ProfileAttributes = () => {
  return (
    <ul className="flex flex-wrap gap-x-2 gap-y-4 items-center justify-center cursor-default sm:flex-col sm:gap-4 sm:flex-nowrap">
      {profile.attributes.map(({ value, label }) => (
        <Attribute key={label} label={label} value={value} />
      ))}
    </ul>
  )
}