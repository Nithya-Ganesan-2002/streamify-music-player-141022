<template>
  <footer class="bottom-player">
    <div class="player-section song-info">
      <span class="song-title">No song playing</span>
      <span class="song-artist"></span>
    </div>
    <div class="player-section player-controls">
      <button title="Previous" class="player-btn"><span>&laquo;</span></button>
      <button title="Play/Pause" class="player-btn main">
        <span>&#9654;</span>
      </button>
      <button title="Next" class="player-btn"><span>&raquo;</span></button>
    </div>
    <div class="player-section progress">
      <span>0:00</span>
      <input type="range" min="0" max="100" value="0" @input="noop" class="progress-bar"/>
      <span>0:00</span>
    </div>
    <div class="player-section volume">
      <span>🔊</span>
      <input type="range" min="0" max="100" value="60" @input="noop" class="volume-bar"/>
    </div>
  </footer>
</template>

<script setup lang="ts">
function noop() { /* placeholder for volume/progress handlers */ }
</script>

<style scoped>
.bottom-player {
  position: fixed;
  bottom: 0;
  left: 0;
  background: var(--color-player-bg);
  color: var(--color-accent);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.6rem 2.2rem;
  z-index: 150;
  box-shadow: 0 -3px 18px 2px rgba(25,20,20,0.15);
  min-height: 72px;
}
.player-section {
  display: flex;
  align-items: center;
  gap: 1.2rem;
}
.song-title {
  font-weight: bold;
  color: var(--color-accent);
}
.player-controls {
  gap: 0.65rem;
}
.player-btn {
  background: transparent;
  color: var(--color-accent);
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  transition: background 0.16s;
}
.player-btn.main {
  background: var(--color-primary);
  color: var(--color-player-bg);
  font-size: 2.2rem;
  border-radius: 48%;
}
.player-btn:hover {
  background: var(--color-primary);
  color: var(--color-player-bg);
}
.progress {
  gap: 0.55rem;
}
.progress-bar,
.volume-bar {
  width: 90px;
  accent-color: var(--color-primary);
  background: var(--color-card-bg);
  border-radius: 5px;
}
</style>
