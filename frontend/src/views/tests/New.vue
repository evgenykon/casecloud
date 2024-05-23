<script setup>

import Toolbar from "../../components/Toolbar.vue";
import Button from "../../components/Button.vue";
import Dropdown from "../../components/Dropdown.vue";
import { useTestStore } from '../../stores/test'
import {useModuleStore} from "../../stores/module.js";
import {ref, watch} from "vue";
import ModuleTree from "../../components/module/ModuleTree.vue";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";

const modules = useModuleStore()
const tests = useTestStore()
const currentProject = ref(null);
watch(currentProject, (value) => {
  const project = modules.projects.find(item => item.id === value);
  if (!project) {
    tests.resetCurrentRequest()
    return;
  }
  tests.newRequest(project)
})

</script>

<template>
  <div class="test-new">
    <h1 class="page-title">New test request</h1>
    <Toolbar>
      Project
      <Dropdown
          :options="[{label: '', value: null}, ...modules.projects.map(item => {return {label: item.name, value: item.id}})]"
          v-model="currentProject">
      </Dropdown>
    </Toolbar>

    <div class="row" v-if="tests.currentRequest">
      <div class="col">
        Modules need to check
      </div>
    </div>

    <div class="row" v-if="tests.currentRequest">
      <div class="col">
        <ModuleTree
            class="module-tree-wrapper"
            :tree="modules.currentProject.modules"
            selection-mode="checkbox"
            :creating-nodes="false"
        ></ModuleTree>
      </div>
      <div class="col input-form">
        <div>Comments from developer</div>
        <Textarea autoResize rows="10" />
        <div>Git Branch</div>
        <InputText placeholder="..." />
        <div>Priority</div>
        <Dropdown
            :options="[{label: 'Normal', value: 'normal'},]">
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.test-new {
  .toolbar {
    margin-bottom: 16px;
  }
  .row {
    margin-bottom: 8px;
  }
  .module-tree-wrapper {
    height: 420px;
  }
  .input-form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>