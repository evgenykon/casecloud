<script setup>
import { useModuleStore } from '../stores/module'
import { ref, watch } from 'vue'

import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Listbox from 'primevue/listbox';
import Textarea from 'primevue/textarea';

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
      <div class="col tree-controls card rounded">
        <Button>
          <oh-vue-icon name="bi-folder-plus" />
          Add root module
        </Button>
        <hr class="divider">
        <div class="form-fields">
          <InputGroup>
            <InputGroupAddon>
              <i class="pi pi-fw pi-ticket"></i>
            </InputGroupAddon>
            <InputText placeholder="Module name" />
          </InputGroup>
          <Button>
            <oh-vue-icon name="ri-save-line" />
            Update
          </Button>
          <Button>
            <oh-vue-icon name="bi-trash" />
            Delete
          </Button>
        </div>
      </div>
    </div>

    <div class="row">
      <h4 class="col">Cases</h4>
    </div>
    <div class="row">
      <div class="col card rounded col-1-3 listbox-wrapper">
        <Listbox :options="[{name: '111', code: '11'},{name: '222', code: '22'}]"
                 optionLabel="name"
                 class="w-full md:w-14rem">
          <template #option="slotProps">
            <div class="listbox-item">
              <div>
                <oh-vue-icon name="bi-file-earmark" />
                {{ slotProps.option.name }}
              </div>
              <div>
                <a href="#"><oh-vue-icon name="md-modeedit-outlined" :scale="1" /></a>
              </div>
            </div>
          </template>
        </Listbox>
      </div>
      <div class="col card rounded col-2-3 cases-edit-card">
        <div class="edit-controls">
          <Button>
            <oh-vue-icon name="bi-file-earmark-plus" :scale="1" />
            New case
          </Button>
          <div class="name-input-wrapper">
            <InputGroup>
              <InputGroupAddon>
                <i class="pi pi-pencil"></i>
              </InputGroupAddon>
              <InputText placeholder="Case title" />
            </InputGroup>
            <Button>
              <oh-vue-icon name="ri-save-line" />
              Update
            </Button>
            <Button>
              <oh-vue-icon name="bi-trash" />
              Delete
            </Button>
          </div>
        </div>

        <div class="case-text">
          <Textarea autoResize rows="25" />
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
        &:nth-child(odd) {
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