import { TRPCError } from "@trpc/server";

export class NoTrackPlayingError extends TRPCError {
  constructor(message: string = 'No track is currently playing') {
    super({ code: 'NOT_FOUND', cause: message });
    this.name = 'NoTrackPlayingError';
  }
}
