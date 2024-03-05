<script setup>
import { ref } from 'vue';

import Tree from 'primevue/tree';
const nodes = ref([
  {
    key: 1,
    label: 'Lab 1',
    icon: 'pi pi-fw pi-inbox',
    children: [
      {
        key: 11,
        label: 'Lab 11',
        icon: 'pi pi-fw pi-inbox',
        children: [

        ]
      }
    ]
  },
  {
    key: 2,
    label: 'Lab 2',
    icon: 'pi pi-fw pi-inbox',
    children: []
  },
]);

</script>

<template>
  <Tree :value="nodes" selectionMode="checkbox" class="w-full md:w-30rem">
    <template #default="slotProps">
      <b>{{ slotProps.node.label }}</b>
    </template>
  </Tree>

</template>

<style scoped lang="scss">

</style>