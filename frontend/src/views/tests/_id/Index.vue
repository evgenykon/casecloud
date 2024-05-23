<script setup>

import Textarea from "primevue/textarea";
import InputText from "primevue/inputtext";
import Dropdown from "../../../components/Dropdown.vue";
import ModuleTree from "../../../components/module/ModuleTree.vue";
import Toolbar from "../../../components/Toolbar.vue";
import {useTestStore } from '../../../stores/test'
import {useModuleStore} from "../../../stores/module.js";
import {ref, watch} from "vue";
const modules = useModuleStore()
const tests = useTestStore()

tests.loadRequest(1)
</script>

<template>
  <div class="test-edit">
    <h1 class="page-title">Test request #</h1>
    <Toolbar>
      Project
      <InputText disabled value="123" />
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
        <Textarea autoResize rows="5" value="asdalksdmalksdmaklsd" />
        <div>Git Branch</div>
        <InputText placeholder="..." value="branch/sdsdsd" />
        <div>Priority</div>
        <InputText disabled value="123" />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.test-edit {
  .toolbar {
    margin-bottom: 16px;
  }
  .row {
    margin-bottom: 8px;
  }
  .module-tree-wrapper {
    height: 200px;
  }
  .input-form {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
}
</style>