import { stringify } from "querystring";

import axios from "axios";

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const SPOTIFY_BASE_ENDPOINT = `https://api.spotify.com/v1`;

const client_id = process.env.SPOTIFY_CLIENT_ID;
const client_secret = process.env.SPOTIFY_CLIENT_SECRET;
const refresh_token = process.env.SPOTIFY_REFRESH_TOKEN;

const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

export interface ISpotifyAccessTokenResponse {
  access_token: string;
  expires_in: number;
}

export interface ISpotifyTrack {
  album: {
    images: {
      url: string;
    }[];
  };
  artists: {
    name: string;
  }[];
  name: string;
  external_urls: {
    spotify: string;
  };
}
export interface ISpotifyCurrentPlayingTrackResponse {
  item: ISpotifyTrack;
  is_playing: boolean;
}

export interface ISpotifyRecentlyPlayedTracksResponse {
  items: {
    track: ISpotifyTrack;
  }[];
}

export const getAccessToken = async () => {
  const res = await axios.post<ISpotifyAccessTokenResponse>(
    TOKEN_ENDPOINT,
    stringify({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${basic}`,
      },
    },
  );
  return res.data;
};

export const getCurrentPlayingTrack = async () => {
  const { access_token } = await getAccessToken();
  const res = await axios.get<ISpotifyCurrentPlayingTrackResponse>(
    `${SPOTIFY_BASE_ENDPOINT}/me/player/currently-playing`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );

  if (res.status === 200 && res.data.is_playing) {
    return res.data.item;
  }

  return null;
};

export const getRecentlyPlayedTracks = async () => {
  const { access_token } = await getAccessToken();
  const res = await axios.get<ISpotifyRecentlyPlayedTracksResponse>(
    `${SPOTIFY_BASE_ENDPOINT}/me/player/recently-played?limit=10`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );

  if (res.status === 200) {
    const recentPlaysLength = res.data.items.length;
    const itemIndex = Math.floor(Math.random() * recentPlaysLength);
    return res.data.items[itemIndex]?.track;
  }

  return null;
};
