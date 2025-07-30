<template>
  <main class="playlists-view">
    <h2>Your Playlists</h2>
    <div v-if="!isAuthenticated">
      <p>Please log in to see your playlists.</p>
    </div>
    <div v-else>
      <div class="playlist-actions">
        <button @click="createPlaylist" class="btn-new">+ New Playlist</button>
      </div>
      <div class="playlists-list">
        <div v-for="playlist in playlists" :key="playlist.id" class="playlist-card">
          <div class="playlist-title">{{ playlist.name }}</div>
          <div class="playlist-song-count">{{ playlist.songs.length }} songs</div>
          <button class="playlist-btn" @click="editPlaylist(playlist)">Edit</button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue"

interface Playlist {
  id: string
  name: string
  songs: string[]
}

const isAuthenticated = ref(false) // stub, replace with auth logic
const playlists = ref<Playlist[]>([
  { id: "p1", name: "My Playlist #1", songs: ["x", "y"] },
  { id: "p2", name: "Chill Vibes", songs: ["x"] },
])
function createPlaylist() {
  // PUBLIC_INTERFACE
  // Stub: Add playlist logic
  alert("Create playlist (stub)")
}
function editPlaylist(p: Playlist) {
  alert(`Edit playlist: ${p.name} (stub)`)
}
</script>

<style scoped>
.playlists-view {
  padding: 2rem 2rem 7rem 2rem;
}
.btn-new {
  background: var(--color-primary);
  color: var(--color-accent);
  border: none;
  border-radius: 7px;
  padding: 0.7rem 1.2rem;
  font-weight: 600;
  margin-bottom: 1.6rem;
  cursor: pointer;
}
.playlists-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
.playlist-card {
  background: var(--color-card-bg);
  color: var(--color-accent);
  padding: 1.1rem 1.7rem;
  border-radius: 9px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
}
.playlist-btn {
  background: var(--color-primary);
  color: var(--color-accent);
  border: none;
  border-radius: 7px;
  padding: 0.45rem 1rem;
  font-weight: 500;
  margin-top: 1rem;
  cursor: pointer;
  align-self: flex-end;
}
.playlist-btn:hover {
  background: #13a74b;
}
</style>
