<script setup>

import Button from "../components/Button.vue";
import Toolbar from "../components/Toolbar.vue";
</script>

<template>
  <div class="team">
    <h1 class="page-title">Tests</h1>
    <Toolbar>
      <Button>
        <oh-vue-icon name="bi-journal-plus" :scale="1" />
        New test request
      </Button>
    </Toolbar>
  </div>
</template>

<style lang="scss">
.team {

}
</style>