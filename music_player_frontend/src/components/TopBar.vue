<template>
  <header class="topbar">
    <div class="topbar-search">
      <input
        v-model="search"
        type="text"
        placeholder="Search for songs, artists, or albums"
        @keydown.enter="onSearch"
      />
      <button @click="onSearch" class="btn-search">Search</button>
    </div>
    <div class="topbar-user">
      <button v-if="!isAuthenticated" @click="onLogin" class="btn-auth">
        Login
      </button>
      <div v-else class="user-profile">
        <img :src="userImg" alt="User Avatar" class="avatar"/>
        <span class="user-name">{{ userName }}</span>
        <button @click="onLogout" class="btn-auth logout-btn">Logout</button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue"
const search = ref("")
const isAuthenticated = ref(false) // replace with real auth
const userName = ref("Demo User")
const userImg = ref("https://ui-avatars.com/api/?name=Demo+User")

function onSearch() {
  // PUBLIC_INTERFACE
  // Emits a search event for the parent.
  // TODO: Implement emitting and result handling
}

function onLogin() {
  // PUBLIC_INTERFACE
  // Trigger login to Spotify (stub)
  // TODO: Implement real auth logic
  window.alert("Login with Spotify (stubbed).")
}

function onLogout() {
  // PUBLIC_INTERFACE
  // Logout stub
  isAuthenticated.value = false
}
</script>

<style scoped>
.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--color-background);
  padding: 1.5rem 2.5rem 1.5rem 270px;
  border-bottom: 1px solid var(--color-border);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  z-index: 110;
  height: 72px;
}

.topbar-search {
  flex: 3;
  display: flex;
  align-items: center;
}
.topbar-search input[type="text"] {
  width: 320px;
  font-size: 1rem;
  padding: 0.7rem 1.1rem;
  border: 1px solid var(--color-border);
  border-radius: 6px 0 0 6px;
  outline: none;
}

.btn-search {
  padding: 0.7rem 1.25rem;
  background: var(--color-primary);
  color: var(--color-accent);
  font-weight: bold;
  border: none;
  border-radius: 0 6px 6px 0;
  cursor: pointer;
  margin-left: -4px;
  transition: background 0.2s;
}
.btn-search:hover {
  background: #13a74b;
}
.topbar-user {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.btn-auth {
  background: var(--color-primary);
  color: var(--color-accent);
  padding: 0.6rem 1.1rem;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-auth.logout-btn {
  background: #db3f3f;
  margin-left: 0.8rem;
}

.btn-auth:hover {
  background: #148033;
}
.user-profile {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
.user-name {
  font-weight: 500;
  margin-right: 4px;
}
</style>
