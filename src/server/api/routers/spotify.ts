import { createTRPCRouter, publicProcedure } from '@/server/api/trpc';
import { getCurrentPlayingTrack } from '@/lib/spotify';

export interface ICurrentPlayingTrack {
  name: string;
  artist: string;
  image?: string | null;
}

export const spotifyRouter = createTRPCRouter({
  getCurrentPlayingTrack: publicProcedure.query(async (): Promise<ICurrentPlayingTrack | null> => {
    try {
      const track = await getCurrentPlayingTrack()

      if (!track?.is_playing) return null;

      return {
        name: track.item.name,
        artist: track.item.artists.map(artist => artist.name).join(', '),
        image: track.item.album.images.length ? track.item.album.images[2]?.url : null,
      }
    } catch (e) {
      return null;
    }
  })
})