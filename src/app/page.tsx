import Image from 'next/image';

import { profile } from "@/data/profile";
import { ProfileAttributes } from "./_components/profile-attributes";
import { ProfileBackground } from './_components/profile-background';

export default async function Home() {
  return (
    <main className="mx-auto min-h-screen max-w-[740px] px-4 pt-24 pb-10 sm:pt-40">
      <div className="container flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-2 cursor-default">
          <h1 className="text-2xl font-bold text-center">{profile.name}</h1>
          <ul className="flex flex-wrap gap-2 items-center justify-center font-mono text-xs list-disc list-inside font-medium cursor-default text-md">
            <li className="list-none">{profile.race}</li>
            <li>{profile.class}</li>
            <li>Level {profile.level}</li>
          </ul>
        </div>

        <div>
          <Image
            className="h-[60px]"
            height={198}
            width={331}
            priority
            src="/svg/dnc-logo.svg"
            alt="Dungeons & Codings"
          />
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-6">
          <ProfileAttributes />

          <div className="flex flex-row gap-4">
            <ProfileBackground />

            <section className="mt-1 sm:max-w-[370px] border border-slate-100 rounded-lg shadow-md py-2 h-fit">
              <div>
                <p className="mx-2 text-sm font-semibold cursor-default">Proficiencies & Languages</p>
                <div className='my-2 border-b border-slate-100'></div>

                <div className="mx-2 flex-col space-y-8">
                  <div>
                    <p>Armor</p>
                    <p className="font-mono text-xs list-disc list-inside font-medium cursor-default">None</p>
                  </div>

                  <div>
                    <p>Weapons</p>
                    <ul className="flex flex-wrap gap-2 items-center justify-center font-mono text-xs list-disc list-inside font-medium cursor-default">
                      <li>Keyboard</li>
                      <li>Mouse</li>
                      <li>Joystick</li>
                      <li>Acoustic Guitar</li>
                    </ul>
                  </div>

                  <div>
                    <p>Tools</p>
                    <ul className="flex flex-wrap gap-2 items-center justify-center font-mono text-xs list-disc list-inside font-medium cursor-default">
                      <li>React</li>
                      <li>Next.js</li>
                      <li>React Native</li>
                      <li>Node.js</li>
                      <li>Git</li>
                      <li>Docker</li>
                    </ul>
                  </div>

                  <div>
                    <p>Languages</p>
                    <ul className="flex flex-wrap gap-2 items-center justify-center font-mono text-xs list-disc list-inside font-medium cursor-default text-md">
                      <li>Javascript</li>
                      <li>Typescript</li>
                      <li>Java</li>
                      <li>PHP</li>
                      <li>Delphi</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

      </div>
    </main>
  );
}
