<script setup>
import ProgressBar from 'primevue/progressbar';
const props = defineProps({
  user: {type: String, required: true},
  //completedRequests: {type: Number},
  completedCases: {type: Number},
  //totalCompletedRequests: {type: Number},
  totalCompletedCases: {type: Number},
})
</script>

<template>
  <div class="workload-progressbar">
    <span class="user" href="#" :id="`user_process_1`">
      <oh-vue-icon name="bi-person-bounding-box"></oh-vue-icon>
      {{ props.user }}
    </span>
    <div class="bar-container">
      <ProgressBar
          aria-label="user_process_1"
          :value="props.completedCases * 100 / props.totalCompletedCases"
      > {{ props.completedCases }}/{{props.totalCompletedCases}} </ProgressBar>
    </div>

  </div>
</template>

<style scoped lang="scss">
.workload-progressbar {
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
  .bar-container {
    position: relative;
    flex: 1;
    .p-progressbar {
      font-size: 12px;
    }
  }
}
</style>