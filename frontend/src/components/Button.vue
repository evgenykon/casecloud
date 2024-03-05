<script setup>
</script>

<template>
<button type="button" class="button">
  <slot></slot>
</button>
</template>

<style lang="scss">
button.button {
  padding: 6px 10px;
  font-size: 14px;
  background-color: var(--button-bg);
  border: 0 none;
  border-radius: 5px;
  box-shadow: 1px 1px 4px var(--shadow);
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  line-height: 16px;
  &:hover {
    box-shadow: 1px 1px 3px var(--shadow-dark);
  }
  &:active {
    box-shadow: none;
    border: 1px solid var(--shadow);
    margin-right: -2px;
  }
}
</style>