<script setup>
import { useModuleStore } from '../stores/module'
import { ref, watch } from 'vue'

import Toolbar from '../components/Toolbar.vue'
import Button from '../components/Button.vue'
import Dropdown from '../components/Dropdown.vue'
import ModuleTree from "../components/module/ModuleTree.vue";

const modules = useModuleStore()
const currentProject = ref(1);
watch(currentProject, (value) => {
  const project = modules.projects.find(item => item.id === value);
  if (!project) {
    return;
  }
  modules.setCurrentProject(project)
})
</script>

<template>
  <div class="modules">
    <h1 class="page-title">Modules</h1>
    <Toolbar>
      <Button>
        <oh-vue-icon name="bi-journal-plus" :scale="1" />
        New project
      </Button>
      <Dropdown
          :options="modules.projects.map(item => {return {label: item.name, value: item.id}})"
          v-model="currentProject">
      </Dropdown>
      <Button>
        <oh-vue-icon name="md-modeedit-outlined" :scale="1" />
        Edit project
      </Button>
      <Button>
        <oh-vue-icon name="bi-trash" :scale="1" />
        Delete project
      </Button>
    </Toolbar>

    <div class="row">
      <div class="col">
        <ModuleTree></ModuleTree>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>