<script setup>
const props = defineProps({
  value: {type: Number, required: true, default: 0},
  color: {type: String, required: true}
})
</script>

<template>
  <span class="list-item-badge" :class="props.color">{{ props.value }}</span>
</template>

<style scoped lang="scss">
.list-item-badge {
  padding: 2px 6px;
  border-radius: 5px;
  &.grey {
    background-color: var(--badge-bg-grey);
  }
}
</style>