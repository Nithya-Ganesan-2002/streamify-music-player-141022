<template>
  <main class="account-view">
    <h2>My Account</h2>
    <div v-if="!isAuthenticated">
      <p>Please login to access account details.</p>
    </div>
    <div v-else>
      <p>Account management is not implemented yet.</p>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue"
const isAuthenticated = ref(false) // stub
</script>
