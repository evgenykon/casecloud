<script setup>
import { ref } from 'vue'

const isAuthorized = ref(true)
</script>

<template>
  <main class="not-authorized" v-if="isAuthorized === false">Not authorized</main>
  <main class="authorized" v-else>
    <nav>
      sss
    </nav>
    <div class="page-content">
      <router-view />
    </div>
  </main>
</template>

<style lang="scss">
main.authorized {
  display: grid;
  align-items: stretch;
  justify-items: start;
  grid-template-columns: 20vw auto;
}
</style>