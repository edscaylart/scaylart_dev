// import clsx from "clsx";
// import { profile } from "@/data/profile";

// const ProfileBackgroundCard = ({
//   name,
//   date,
//   description,
//   locality,
//   techs,
// }: {
//   name: string;
//   date: string;
//   description: string;
//   locality?: string;
//   techs?: string[];
// }) => {
//   return (
//     <li
//       className={clsx(
//         "relative cursor-default rounded-lg border-[1px] border-none px-4 py-3",
//         "transition-all duration-500 ease-out",
//         "bg-stone-900 hover:bg-stone-800",
//       )}
//     >
//       <div className="flex w-full flex-col space-y-4">
//         <div className="flex flex-col">
//           <div className="mb-2 flex flex-row items-center justify-end">
//             <span className="text-xs text-gray-600">{date}</span>
//           </div>
//           <span className="text-md font-semibold">{name}</span>
//           {locality && (
//             <span className="text-sm text-gray-600">{locality}</span>
//           )}
//         </div>
//         <span className="text-sm text-gray-600">{description}</span>
//         {techs && (
//           <div className="flex flex-wrap items-start gap-x-2 gap-y-1">
//             {techs?.map((tech) => (
//               <span
//                 key={tech}
//                 className="inline-block rounded-md border-[1px] border-zinc-700 px-2 py-1 font-mono text-xs font-semibold"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         )}
//       </div>
//     </li>
//   );
// };

// export const ProfileBackground = () => {
//   return (
//     <section className="mt-1 rounded-lg border border-slate-100 py-2 shadow-md md:max-w-[360px]">
//       <p className="ml-4 cursor-default text-sm font-semibold">Background</p>
//       <div className="mt-2 border-b border-slate-100"></div>
//       <div className="mt-4 px-2">
//         <ul className="flex flex-col space-y-4">
//           {profile.background.map((bg) => (
//             <ProfileBackgroundCard key={bg.name} {...bg} />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };
