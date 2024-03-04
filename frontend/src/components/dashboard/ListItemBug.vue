<script setup>
const props = defineProps({
  value: {type: Number, required: true, default: 0},
})
</script>

<template>
  <span class="list-item-bug" :class="{green: props.value === 0, red: props.value > 0}">
    <img v-if="props.value > 0" src="/bug_red.svg" alt="has bugs">
    <img v-else src="/bug_green.svg" alt="no bugs">
    {{ props.value }}
  </span>
</template>

<style scoped lang="scss">
.list-item-bug {
  padding: 2px 6px;
  border-radius: 5px;
  display: flex;
  gap: 2px;
  &.green {
    color: var(--success-green);
  }
  &.red {
    color: var(--fail-red);
  }
}
</style>