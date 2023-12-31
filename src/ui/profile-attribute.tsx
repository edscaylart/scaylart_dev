import { IProfileAttribute } from "~/data/profile"
import { getAttributeModifier } from "~/utils/dnd"

interface IProfileAttributeProps {
  attribute: IProfileAttribute
}

export const ProfileAttribute = ({ attribute }: IProfileAttributeProps) => {
  const modifier = getAttributeModifier(attribute.value);

  return (
    <li className="container flex flex-col items-center justify-between border border-black rounded-lg h-[90px] w-[84px] pt-1">
      <span className="text-[9px] uppercase">{attribute.label}</span>
      <span className="text-xl">{attribute.value}</span>
      <div className="flex h-[24px] w-[40px] border border-black rounded-lg items-center justify-center">
        <span className="text-sm">{modifier >= 0 ? `+${modifier}` : modifier}</span>
      </div>
    </li>
  )
}