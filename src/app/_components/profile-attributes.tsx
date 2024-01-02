import Image from 'next/image';

import { profile } from "@/data/profile";
import { getAttributeModifier } from "@/utils/dnd"

const Attribute = ({ label, value }: { label: string, value: number }) => {
  const modifier = getAttributeModifier(value);

  return (
    <li className="relative container flex flex-col items-center rounded-lg h-[102px] w-[84px] pt-1 m-0 text-center">
      <div className="absolute overflow-hidden top-0 bottom-0 left-0 right-0">
        <Image
          height={102}
          width={84}
          priority
          src="/svg/dnd-box-background.svg"
          alt="Dnd Box Background"
        />
      </div>
      <div>
        <span className="relative text-[9px] uppercase font-semibold">{label}</span>
      </div>
      <div>
        <span className=" relative text-2xl font-semibold">{modifier >= 0 ? `+${modifier}` : modifier}</span>
      </div>
      <div className="absolute bottom-2 left-0 right-0">
        <span className="text-md font-semibold">{value}</span>
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