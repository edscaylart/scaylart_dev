import { ProfileAttributes } from "@/components/profile-attributes";
import { ProfileHeader } from "@/components/profile-header";
import { ProfileSkills } from "@/components/profile-skills";
import { ProfileProficienciesAndLanguages } from "@/components/profile-proficiencies-n-languages";
import { DncLogo } from "@/components/ui/dnc-logo";
import { ProfileTimeline } from "@/components/profile-timeline";

export default async function Home() {
  return (
    <main className="sm:pt-30 mx-auto min-h-screen max-w-[730px] px-4 pb-10 pt-24">
      <div className="mt-8 flex flex-col gap-4">
        <ProfileHeader />
        <ProfileAttributes />
        <div className="mt-4">
          <div className="flex flex-row flex-wrap gap-4">
            <ProfileSkills />
            <div className="flex flex-1 flex-col">
              <ProfileProficienciesAndLanguages />
              <div className="mt-4 flex flex-1 items-center justify-center sm:mt-0">
                <DncLogo className="fill-background-900 hover:fill-background-800" />
              </div>
            </div>
          </div>
        </div>
        <ProfileTimeline />
      </div>
    </main>
  );
}
