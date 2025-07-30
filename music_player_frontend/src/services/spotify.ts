import axios from "axios"

/**
 * Spotify API service stub for integration.
 * Handles authentication, search, playback, and playlist management via Spotify Web API.
 * Uses VITE_SPOTIFY_CLIENT_ID and VITE_SPOTIFY_REDIRECT_URI from environment variables.
 */

const SPOTIFY_CLIENT_ID = import.meta.env.VITE_SPOTIFY_CLIENT_ID
const SPOTIFY_REDIRECT_URI = import.meta.env.VITE_SPOTIFY_REDIRECT_URI

// PUBLIC_INTERFACE
export function getSpotifyAuthUrl(): string {
  /**
   * Returns the Spotify auth URL to direct the user for login.
   */
  const scope =
    "user-read-private user-read-email playlist-modify-public playlist-modify-private user-library-read streaming"
  const params = new URLSearchParams({
    client_id: SPOTIFY_CLIENT_ID,
    response_type: "token",
    redirect_uri: SPOTIFY_REDIRECT_URI,
    scope,
    show_dialog: "true",
  })
  return "https://accounts.spotify.com/authorize?" + params.toString()
}

export interface SpotifyTrack {
  id: string
  name: string
  artists: { name: string }[]
  album: { images: { url: string }[] }
}

// PUBLIC_INTERFACE
export function searchTracks(query: string, token: string): Promise<unknown> {
  /**
   * Search for tracks via Spotify Web API.
   * @param query Search term.
   * @param token OAuth token.
   */
  return axios.get("https://api.spotify.com/v1/search", {
    headers: { Authorization: `Bearer ${token}` },
    params: { q: query, type: "track" },
  })
}

// (stub for other Spotify/playlist/player API functions can be added here)
