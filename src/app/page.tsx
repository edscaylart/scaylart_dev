import Link from "next/link";

import { api } from "@/trpc/server";
import { profile } from "@/data/profile";
import { ProfileAttributes } from "./_components/profile-attributes";
import { ProfileOrganizations } from "./_components/profile-organizations";

export default async function Home() {
  // const spotifyTrack = await api.spotify.getCurrentPlayingTrack.query();

  return (
    <main className="mx-auto min-h-screen max-w-[640px] px-4 pt-24 pb-10 sm:pt-40">
      <div className="container flex flex-col items-center justify-center gap-6">
        <div className="flex flex-col gap-2 cursor-default">
          <h1 className="text-2xl font-bold text-center">{profile.name}</h1>
          <ul className="flex flex-wrap gap-2 items-center justify-center font-mono text-xs list-disc list-inside font-medium cursor-default text-md">
            <li className="list-none">{profile.race}</li>
            <li>{profile.class}</li>
            <li>Level {profile.level}</li>
          </ul>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-6">
          <ProfileAttributes />

          <ProfileOrganizations />
        </div>

      </div>
    </main>
  );
}
