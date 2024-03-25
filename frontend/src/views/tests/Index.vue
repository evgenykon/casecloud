<script setup>
import { useTestStore } from '../../stores/test'
import { useRouter } from 'vue-router'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const test = useTestStore()
const router = useRouter()
import Button from "../../components/Button.vue";
import Toolbar from "../../components/Toolbar.vue";

const onRowSelect = (row) => {
  console.log('onRowSelect', row)
  router.push({name:'EditTestRequest', params: {id: 123}})
}
</script>

<template>
  <div class="team">
    <h1 class="page-title">Tests</h1>

    <Toolbar>
      <Button @click="router.push({name:'NewTestRequest'})">
        <oh-vue-icon name="bi-journal-plus" :scale="1" />
        New test request
      </Button>
    </Toolbar>

    <DataTable :value="test.fullTable"
               selectionMode="single"
               dataKey="id"
               tableStyle="min-width: 50rem"
               stripedRows
               size="small"
               @row-select="row => onRowSelect(row)"
    >
      <Column field="requestNumber" header="#"></Column>
      <Column field="dateAt" header="Created"></Column>
      <Column field="branch" header="Branch"></Column>
      <Column field="modulesCount" header="Modules"></Column>
      <Column field="casesCount" header="Cases"></Column>
      <Column field="testedBy" header="Assigned"></Column>
      <Column field="status" header="Status"></Column>
      <Column field="bugsCount" header="Bugs"></Column>
    </DataTable>
  </div>
</template>

<style lang="scss">
.team {

}
</style>