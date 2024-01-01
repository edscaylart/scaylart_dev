import clsx from 'clsx';
import { organizations } from "@/data/organizations"

const OrganizationCard = ({ name, date, locality, description, techs }: { name: string; date: string; locality: string; description: string; techs: string[] }) => {
  return (
    <li className={clsx(
      'relative rounded-lg border-[1px] border-none px-4 py-3 cursor-default',
      'transition-all duration-500 ease-out',
      'bg-stone-900 hover:bg-stone-800',
    )}>
      <div className="flex w-full flex-col space-y-4">
        <div className='flex flex-col'>
          <div className="flex flex-row items-center justify-end mb-2">
            <span className="text-xs text-gray-600">{date}</span>
          </div>
          <span className="text-md font-semibold">{name}</span>
          <span className="text-sm text-gray-600">{locality}</span>
        </div>
        <span className="text-sm text-gray-600">{description}</span>
        <div className="flex flex-wrap items-start gap-x-2 gap-y-1">
          {techs?.map(tech => (
            <span key={tech} className="inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-xs font-semibold">{tech}</span>
          ))}
        </div>
      </div>
    </li>
  )
}

export const ProfileOrganizations = () => {
  return (
    <section className="mt-1">
      <p className="text-xl font-semibold cursor-default">Organizations</p>
      <div className='mt-2 border-b border-slate-100'></div>
      <div className="mt-4">
        <ul className="flex flex-col space-y-4">
          {organizations.map(organization => (
            <OrganizationCard key={organization.name} {...organization} />
          ))}
        </ul>
      </div>
    </section>
  )
}