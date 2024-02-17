import Image from "next/image";

import { ProfileAttributes } from "@/components/profile-attributes";
import { ProfileHeader } from "@/components/profile-header";
import { ProfileSkills } from "@/components/profile-skills";
import { ProfileProficienciesAndLanguages } from "@/components/profile-proficiencies-n-languages";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { DncLogo } from "@/components/ui/dnc-logo";

export default async function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[740px] px-4 pb-10 pt-16 sm:pt-16">
      <BackgroundBeams />
      <div className="flex items-center justify-center">
        <DncLogo className="size-[120px]" />
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <ProfileHeader />
        <ProfileAttributes />
        <div className="mt-4">
          <div className="flex flex-row gap-4">
            <ProfileSkills />
            <div className="flex flex-1 flex-col">
              <ProfileProficienciesAndLanguages />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
