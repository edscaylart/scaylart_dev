import { TRPCError } from '@trpc/server';
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';
import { getCurrentPlayingTrack } from '~/lib/spotify';
import { NoTrackPlayingError } from '~/server/errors/no-track-playing-error';

export const spotifyRoute = createTRPCRouter({
  getCurrentPlayingTrack: publicProcedure.query(async () => {
    try {
      const track = await getCurrentPlayingTrack()

      if (!track?.is_playing) {
        throw new NoTrackPlayingError()
      }

      return {
        name: track.item.name,
        artist: track.item.artists[0]?.name,
        image: track.item.album.images.length ? track.item.album.images[1]?.url : null,
      }
    } catch (error: any) {
      throw new TRPCError({
        code: 'BAD_REQUEST',
        message: error.message
      })
    }
  })
})