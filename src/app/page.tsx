import Image from "next/image";

import { ProfileAttributes } from "@/components/profile-attributes";
import { ProfileHeader } from "@/components/profile-header";
import { SkillsCard } from "@/components/skills-card";
import { ProficienciesAndLanguages } from "@/components/proficiencies-n-languages";

export default async function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[740px] px-4 pb-10 pt-16 sm:pt-16">
      <div className="flex items-center justify-center">
        <Image
          className="h-[60px]"
          height={198}
          width={331}
          priority
          src="/svg/dnc-logo.svg"
          alt="Dungeons & Codings"
        />
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <ProfileHeader />
        <ProfileAttributes />
        <div className="mt-4">
          <div className="flex flex-row gap-4">
            <SkillsCard />
            <div className="flex flex-1 flex-col">
              <ProficienciesAndLanguages />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
