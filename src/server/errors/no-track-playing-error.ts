export class NoTrackPlayingError extends Error {
  constructor(message: string = 'No track is currently playing') {
    super(message);
    this.name = 'NoTrackPlayingError';
  }
}
