<script setup>
import { ref } from 'vue';
import Tree from 'primevue/tree';
const props = defineProps({
  tree: {type: Array, required: true, default: () => []}
})
const selectedKey = ref(null);
const emit = defineEmits(['edit-node', 'select-nodes', 'add-sub-node'])

</script>

<template>
  <Tree :value="props.tree"
        v-model:selectionKeys="selectedKey"
        selectionMode="single"
        class="module-tree w-full md:w-30rem"
        @nodeSelect="node => emit('edit-node', node)"
  >
    <template #default="slotProps">
      <div class="controls">
        <a href="#" @click.stop="emit('add-sub-node', slotProps.node)">
          <oh-vue-icon name="bi-folder-plus" />
        </a>
      </div>
      <span>{{ slotProps.node.label }}</span>
    </template>
  </Tree>
  {{ selectedKey }}
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