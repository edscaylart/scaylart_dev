import { api } from "@/trpc/server";
import { Link } from "./link";
import { FaSpotify } from "react-icons/fa";

export const Footer = async () => {
  const spotifyTrack = await api.spotify.getCurrentPlayingTrack.query();


  return (
    <footer className="my-10 mx-auto max-w-[640px] px-4 pb-16">
      <div className="my-5 border-b border-rose-100/20"></div>

      <div className="flex flex-col flex-wrap items-center gap-10 py-5 px-4">
        <Link
          href="https://open.spotify.com/user/12145354220?si=605b7d5194434911"
          external
          size="sm"
          className="mr-auto"
          leftIcon={
            <FaSpotify size={16} className="fill-[#1DB954]" />
          }
        >
          {spotifyTrack ? (
            <>
              <span className="font-bold">
                {spotifyTrack.name}
              </span>
              <span className="text-rose-200/50">
                {' '}
                - {spotifyTrack.artist}
              </span>
            </>
          ) : (
            <>
              <span className="font-bold">
                Not playing right now
              </span>
              <span className="text-rose-200/50">
                {' '}
                - Spotify
              </span>
            </>
          )}
        </Link>
      </div>
    </footer>
  )
}