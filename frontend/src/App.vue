<script setup>
import { ref } from 'vue'
import { useUserStore } from './stores/user'
import Sidebar from './components/Sidebar.vue'

const isAuthorized = ref(true)
const user = useUserStore()
</script>

<template>
  <main class="not-authorized" v-if="isAuthorized === false">Not authorized</main>
  <main class="authorized" v-else>
    <Sidebar active="dashboard" />
    <div class="page-content">
      <router-view />
    </div>
  </main>
</template>

<style lang="scss">
html, body, #app {
  padding: 0;
  margin: 0;
}
main.authorized {
  .page-content {
    margin-left: 90px;
  }
}
</style>