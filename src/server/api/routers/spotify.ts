import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import {
  type ISpotifyTrack,
  getCurrentPlayingTrack,
  getRecentlyPlayedTracks,
} from "@/lib/spotify";

export interface ICurrentPlayingTrack {
  name: string;
  artist: string;
  image?: string | null;
  currentStatus: string;
}

export const spotifyRouter = createTRPCRouter({
  getCurrentPlayingTrack: publicProcedure.query(
    async (): Promise<ICurrentPlayingTrack | null> => {
      try {
        let track: ISpotifyTrack | null | undefined =
          await getCurrentPlayingTrack();
        let currentStatus = "Vibing to:";

        if (!track) {
          track = await getRecentlyPlayedTracks();
          currentStatus = "Recently played:";
        }

        if (!track) return null;

        return {
          name: track.name,
          artist: track.artists.map((artist) => artist.name).join(", "),
          image: track.album.images.length ? track.album.images[2]?.url : null,
          currentStatus,
        };
      } catch (e) {
        return null;
      }
    },
  ),
});
