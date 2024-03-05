<script setup>

</script>

<template>
<div class="toolbar">
  <slot></slot>
</div>
</template>

<style lang="scss">
.toolbar {
  display: flex;
  background-color: var(--sidebar-bg);
  padding: 6px 10px;
  width: 100%;
  gap: 8px;
  border-radius: 5px;
}
</style>