<script setup>
import { useModuleStore } from '../stores/module'
import { ref, watch } from 'vue'
import { useConfirm } from "primevue/useconfirm";

import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Listbox from 'primevue/listbox';
import Textarea from 'primevue/textarea';
import ConfirmPopup from 'primevue/confirmpopup';

import Toolbar from '../components/Toolbar.vue'
import Button from '../components/Button.vue'
import Dropdown from '../components/Dropdown.vue'
import ModuleTree from "../components/module/ModuleTree.vue";

const modules = useModuleStore()
const currentProject = ref(1);
const confirm = useConfirm();

watch(currentProject, (value) => {
  const project = modules.projects.find(item => item.id === value);
  if (!project) {
    return;
  }
  modules.setCurrentProject(project)
})

const onEditNode = (node) => {
  modules.setEditingNode(node)
}

const onDeleteNode = () => {
  console.log('onDeleteNode')
  modules.deleteEditingNode()
}

const onAddSubNode = (node) => {
  modules.addNode(node)
}

const onAddCase = () => {
  modules.addCaseToEditingNode()
}

const onEditCase = (event) => {
  modules.setEditingCase(event.value)
}

const onDeleteCase = (value) => {
  console.log('onDeleteCase', value.option)
}

const deleteProjectConfirmation = (event) => {
  confirm.require({
    target: event.currentTarget,
    message: 'Are you sure you want to proceed?',
    icon: 'pi pi-exclamation-triangle',
    rejectClass: 'p-button-secondary p-button-outlined p-button-sm',
    acceptClass: 'p-button-sm',
    rejectLabel: 'Cancel',
    acceptLabel: 'Delete',
    accept: () => {
      modules.deleteCurrentProject()
    },
    reject: () => {}
  });
};

const deleteNodeConfirmation = (event) => {
  confirm.require({
    target: event.currentTarget,
    message: 'Are you sure you want to proceed?',
    icon: 'pi pi-exclamation-triangle',
    rejectClass: 'p-button-secondary p-button-outlined p-button-sm',
    acceptClass: 'p-button-sm',
    rejectLabel: 'Cancel',
    acceptLabel: 'Delete node',
    accept: () => {
      modules.deleteEditingNode()
    },
    reject: () => {}
  });
};

const deleteCaseConfirmation = (event) => {
  confirm.require({
    target: event.currentTarget,
    message: 'Are you sure you want to proceed?',
    icon: 'pi pi-exclamation-triangle',
    rejectClass: 'p-button-secondary p-button-outlined p-button-sm',
    acceptClass: 'p-button-sm',
    rejectLabel: 'Cancel',
    acceptLabel: 'Delete case',
    accept: () => {
      modules.deleteEditingCase()
    },
    reject: () => {}
  });
}
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
      <ConfirmPopup></ConfirmPopup>
      <Button @click="deleteProjectConfirmation($event)">
        <oh-vue-icon name="bi-trash" :scale="1" />
        Delete project
      </Button>
    </Toolbar>

    <div class="row">
      <div class="col">
        <ModuleTree
            :tree="modules.currentProject.modules"
            @edit-node="onEditNode"
            @add-sub-node="onAddSubNode"
        ></ModuleTree>
      </div>
      <div class="col tree-controls card rounded">
        <Button @click="modules.addNode(null)">
          <oh-vue-icon name="bi-folder-plus" />
          Add root module
        </Button>
        <hr class="divider" v-if="modules.editingNode !== null">

        <InputGroup v-if="modules.editingNode !== null">
          <InputGroupAddon>
            <i class="pi pi-fw pi-ticket"></i>
          </InputGroupAddon>
          <InputText placeholder="Module name" v-model="modules.editingNode.label" />
        </InputGroup>

        <div class="form-fields" v-if="modules.editingNode !== null">
          <Button>
            <oh-vue-icon name="ri-save-line" />
            Save
          </Button>
          <ConfirmPopup></ConfirmPopup>
          <Button @click="deleteNodeConfirmation">
            <oh-vue-icon name="bi-trash" />
            Delete
          </Button>
        </div>

      </div>
    </div>

    <div class="row" v-if="modules.editingNode">
      <h4 class="col">Cases</h4>
    </div>
    <div class="row" v-if="modules.editingNode">
      <div class="col card rounded col-1-3 listbox-wrapper">
        <Listbox :options="modules.editingNode.cases"
                 optionLabel="name"
                 class="w-full md:w-14rem"
                 :model-value="modules.editingCase"
                 @change="onEditCase"
        >
          <template #option="slotProps">
            <div class="listbox-item">
              <div>
                <oh-vue-icon name="bi-file-earmark" />
                {{ slotProps.option.name }}
              </div>
            </div>
          </template>
        </Listbox>
      </div>
      <div class="col card rounded col-2-3 cases-edit-card">
        <div class="edit-controls">
          <Button @click="onAddCase">
            <oh-vue-icon name="bi-file-earmark-plus" :scale="1" />
            New case
          </Button>
          <div class="name-input-wrapper" v-if="modules.editingCase">
            <InputGroup>
              <InputGroupAddon>
                <oh-vue-icon name="bi-file-earmark" />
              </InputGroupAddon>
              <InputText placeholder="Case title" v-model="modules.editingCase.name" />
            </InputGroup>
            <Button>
              <oh-vue-icon name="ri-save-line" />
              Save
            </Button>
            <ConfirmPopup></ConfirmPopup>
            <Button @click="deleteCaseConfirmation">
              <oh-vue-icon name="bi-trash" />
              Delete
            </Button>
          </div>
        </div>

        <div class="case-text">
          <Textarea  v-if="modules.editingCase"
                     autoResize
                     rows="25"
                     v-model="modules.editingCase.scenario" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.modules {
  .toolbar {
    margin-bottom: 16px;
    .p-dropdown {
      margin-left: auto;
    }
  }
  .p-tree {
    padding: 8px;
    .p-tree-container .p-treenode .p-treenode-content {
      padding: 2px;
      .p-tree-toggler {
        width: 20px;
        height: 20px;
      }
    }
  }
  .tree-controls {
    padding: 12px;
  }
  hr.divider {
    margin: 12px 0 12px;
    border: none;
    border-top: 1px solid var(--card-border);
  }
  .form-fields {
    display: flex;
    gap: 6px;
    padding: 0;
    margin-top: 16px;
    .p-inputtext {
      font-size: 16px;
      padding: 6px;
    }
    .p-inputgroup-addon {
      padding: 2px;
      min-width: 26px;
    }
  }
  .col-1-3 {
    flex: 1;
  }
  .col-2-3 {
    flex: 2;
  }
  .listbox-wrapper {
    padding: 12px;
    .p-listbox-list {
      padding: 0;
      .p-listbox-item {
        &:nth-child(even) {
          background-color: var(--row-bg-light);
        }
        padding: 4px 6px;
        .listbox-item {
          display: flex;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
        }
      }
    }
  }
  .cases-edit-card {
    padding: 12px;
    display: flex;
    flex-flow: column;
    .edit-controls {
      display: flex;
      margin-bottom: 16px;
      .name-input-wrapper {
        margin-left: auto;
        display: flex;
        gap: 6px;
        .p-inputgroup {
          .p-inputgroup-addon {
            padding: 2px;
            min-width: 28px;
          }
          .p-inputtext {
            padding: 2px 6px;
          }
        }
      }
    }
    .case-text {
      textarea {
        width: 100%;
      }
    }
  }
}
</style>