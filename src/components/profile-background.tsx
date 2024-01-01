import clsx from 'clsx'
import { education } from "@/data/education"

export const ProfileBackground = () => {
  return (
    <section className="mt-6">
      <p className="text-xl font-semibold cursor-default">Academic Background</p>
      <div className='mt-2 border-b border-slate-100'></div>
      <div className="mt-4">
        <ul className="flex flex-col space-y-4">
          {education.map(item => (
            <EducationCard key={item.name} {...item} />
          ))}
        </ul>
      </div>
    </section>
  )
}

const EducationCard = ({ name, date, description }: { name: string; date: string; description: string }) => {
  return (
    <li className={clsx(
      'relative rounded-lg border-[1px] border-none px-4 py-3 cursor-default',
      'transition-all duration-500 ease-out',
      'bg-slate-50 hover:bg-slate-200',
    )}>
      <div className="flex w-full flex-col space-y-4">
        <div className="flex flex-row items-center justify-between">
          <span className="text-md font-semibold">{name}</span>
          <span className="text-xs text-gray-600">{date}</span>
        </div>
        <span className="text-sm text-gray-600">{description}</span>
      </div>
    </li>
  )
}