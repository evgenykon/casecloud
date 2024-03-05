<script setup>
import PVDropdown from 'primevue/dropdown';

const props = defineProps({
  options: {type: Array, required: true, default: () => []},
})
</script>

<template>
<PVDropdown :options="options" option-label="label" option-value="value"></PVDropdown>
</template>

<style lang="scss">
.p-dropdown.p-component {
  font-size: 16px;
  .p-dropdown-label.p-inputtext {
    padding: 5px 0 5px 6px;
  }
  .p-dropdown-trigger {
    padding: 5px 10px;
    width: 30px;
  }
}
</style>