<script setup>
const props = defineProps({
  dateAt: {type: String, required: true},
  user: {type: String, required: true},
  requestNumber: {type: Number, required: true},
  branch: {type: String, required: true},
  action: {type: String, required: true},
  comment: {type: String}
})
</script>

<template>
<div class="activity-row">
  <div class="date">{{ props.dateAt }}</div>
  <div>
    <a class="user" href="#">
      <oh-vue-icon name="bi-person-bounding-box"></oh-vue-icon>
      {{ props.user }}
    </a>
    <span v-if="props.action === 'create'"> creates new test request </span>
    <span v-if="props.action === 'update'"> updates test request </span>
    <span v-if="props.action === 'assign'"> assigned for test request </span>
    <span v-if="props.action === 'complete'"> complete testing for request </span>
    <a href="#">#{{ props.requestNumber }}</a>
    for branch <code>{{ props.branch }}</code>
    <span v-if="props.comment"> and {{ props.comment }}</span>
  </div>
</div>
</template>

<style scoped lang="scss">
.activity-row {
  display: flex;
  font-size: 14px;
  gap: 16px;
  a.user {
  }
  .date {
    margin-right: 20px;
    white-space: nowrap;
  }
  code {
    font-size: 12px;
    color: var(--link-hover);
  }
}
</style>