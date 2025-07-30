<template>
  <main class="search-view">
    <h2>Search Music</h2>
    <form @submit.prevent="onSearch">
      <input
        v-model="query"
        type="text"
        placeholder="Type something to search"
        class="search-input"
      />
    </form>
    <div v-if="loading" class="search-loading">
      Searching...
    </div>
    <div v-if="results.length" class="songs-list">
      <div v-for="song in results" :key="song.id" class="song-card">
        <img :src="song.albumImage" class="song-album" />
        <div class="song-meta">
          <div class="song-title">{{ song.name }}</div>
          <div class="song-artist">{{ song.artist }}</div>
        </div>
        <button class="play-btn" @click="noop">Play</button>
      </div>
    </div>
    <div v-else-if="!loading && searched">
      <p>No results found.</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue"

interface SongHit {
  id: string
  name: string
  artist: string
  albumImage: string
}

const query = ref("")
const results = ref<SongHit[]>([])
const loading = ref(false)
const searched = ref(false)

function onSearch() {
  // PUBLIC_INTERFACE
  // Trigger song search (stubbed)
  loading.value = true
  results.value = []
  searched.value = true
  setTimeout(() => {
    loading.value = false
    if (query.value.trim().toLowerCase().includes('test')) {
      // Example result
      results.value = [
        {
          id: "song123",
          name: "Test Song",
          artist: "Test Artist",
          albumImage: "https://via.placeholder.com/60x60.png?text=Album"
        }
      ]
    } else {
      results.value = []
    }
  }, 900)
}
function noop() {}
</script>

<style scoped>
.search-view {
  padding: 2rem 2rem 6rem 2rem;
}
.search-input {
  width: 340px;
  padding: 0.9rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid var(--color-border);
  margin-bottom: 1.4rem;
}
.songs-list {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.song-card {
  display: flex;
  align-items: center;
  background: var(--color-card-bg);
  color: var(--color-accent);
  padding: 0.7rem 1.2rem;
  border-radius: 10px;
}
.song-album {
  width: 60px;
  height: 60px;
  border-radius: 7px;
  margin-right: 1rem;
}
.song-meta {
  flex: 1;
}
.play-btn {
  background: var(--color-primary);
  color: var(--color-accent);
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 7px;
  cursor: pointer;
  margin-left: 1rem;
  font-weight: 600;
}
.play-btn:hover {
  background: #13a74b;
}
</style>
