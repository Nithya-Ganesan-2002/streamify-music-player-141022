<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import TopBar from './components/TopBar.vue'
import BottomPlayer from './components/BottomPlayer.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="streamify-root">
    <AppSidebar />
    <div class="main-content">
      <TopBar />
      <section class="central-content">
        <RouterView />
      </section>
      <BottomPlayer />
    </div>
  </div>
</template>

<style scoped>
#streamify-root {
  display: flex;
  font-family: Inter, Arial, sans-serif;
  min-height: 100vh;
  background: var(--color-background);
  color: var(--color-text);
}
.main-content {
  flex: 1;
  margin-left: 240px; /* sidebar width */
  min-width: 0;
  position: relative;
}
.central-content {
  padding: 6rem 2rem 7rem 2rem;
  min-height: 80vh;
  background: var(--color-background);
}
@media (max-width: 800px) {
  .main-content {
    margin-left: 0;
  }
}
</style>
