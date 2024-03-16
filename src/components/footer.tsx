import Image from "next/image";
import { FaSpotify } from "react-icons/fa";

import { api } from "@/trpc/server";
import { siteConfig } from "@/config/site";

import { Link } from "./link";

export const Footer = async () => {
  const spotifyTrack = await api.spotify.getCurrentPlayingTrack.query();

  return (
    <footer className="mx-auto my-10 w-full max-w-[730px] px-4 pb-16">
      {/* <div className="border-rose-100/20 my-5 border-b"></div> */}

      <div className="flex flex-col flex-wrap items-center gap-10 px-4 py-5">
        <Link
          href={siteConfig.spotifyProfile}
          external
          size="sm"
          className="mr-auto"
          leftIcon={
            <FaSpotify
              size={!spotifyTrack ? 16 : 32}
              className="fill-[#1DB954]"
            />
          }
        >
          {spotifyTrack ? (
            <div>
              <span>{spotifyTrack.currentStatus}</span>
              <div className="flex flex-row gap-4">
                {spotifyTrack.image && (
                  <Image
                    height={48}
                    width={48}
                    priority
                    src={spotifyTrack.image}
                    alt={spotifyTrack.name}
                  />
                )}
                <div className="flex flex-col gap-1">
                  <span className="font-bold">{spotifyTrack.name}</span>
                  <span className="text-rose-200/50">
                    {spotifyTrack.artist}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <>
              <span className="font-bold">Not playing right now</span>
              <span className="text-rose-200/50"> - Spotify</span>
            </>
          )}
        </Link>

        <div className="grid w-full grid-flow-dense grid-cols-2 items-start gap-4">
          <div className="flex flex-col items-start gap-4">
            <Link href="/" variant="link">
              Home
            </Link>
            <Link href="/profile" variant="link">
              My Profile
            </Link>
          </div>
          <div className="flex flex-col items-start gap-4">
            <Link href={siteConfig.githubUrl} external variant="link">
              Github
            </Link>
            <Link href={siteConfig.linkedinUrl} external variant="link">
              LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
