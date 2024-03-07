<script setup>
import { ref } from 'vue';

import Tree from 'primevue/tree';
const nodes = ref([
  {
    key: 1,
    label: 'Module 1',
    icon: 'pi pi-fw pi-ticket',
    children: [
      {
        key: 11,
        label: 'Module 11',
        icon: 'pi pi-fw pi-ticket',
        children: [

        ]
      }
    ]
  },
  {
    key: 2,
    label: 'Lab 2',
    icon: 'pi pi-fw pi-ticket',
    children: []
  },
]);

</script>

<template>
  <Tree :value="nodes" selectionMode="checkbox" class="module-tree w-full md:w-30rem">
    <template #default="slotProps">
      <div class="controls">
        <a href="#">
          <oh-vue-icon name="bi-folder-minus" />
        </a>
        <a href="#">
          <oh-vue-icon name="bi-folder-plus" />
        </a>
        <a href="#">
          <oh-vue-icon name="md-modeedit-outlined" :scale="1" />
        </a>
      </div>
      <span>{{ slotProps.node.label }}</span>
    </template>
  </Tree>

</template>

<style lang="scss">
.module-tree {
  .p-treenode {
    padding: 2px;
    .p-treenode-content {
      .p-treenode-label {
        display: flex;
        gap: 5px;
        .controls {
          display: flex;
          gap: 3px;
          margin: 0 5px;
          svg {
            color: var(--tree-icon-color);
            &:hover {
              color: var(--tree-icon-color-hover);
            }
          }
        }
      }
    }
  }
}
</style>