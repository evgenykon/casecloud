<script setup>
const props = defineProps({
  clickable: {type: Boolean, required: false, default: false},
  number: {type: Number, required: true},
  branch: {type: String, required: true},
  createdAt: {type: String, required: true},
  createdBy: {type: String, required: true},
  testedAt: {type: String},
  testedBy: {type: String},
})
</script>

<template>
<div class="dashboard-list-item" :class="{'clickable': props.clickable}">
  <span class="item-num">#{{ props.number }}</span>
  <span class="branch">{{ props.branch }}</span>
  <div class="column">
    <span class="column-line nowrap">
      <img src="/code-block.svg" alt="tester" style="margin: 0 3px 0 8px;">
      {{ props.createdAt }}
    </span>
    <span class="column-line nowrap">
      <img src="/test-tool.svg" alt="tester" style="margin: 0 3px 0 8px;">
      {{ props.testedAt ?? '---' }}
    </span>
  </div>
  <div class="column">
    <span class="nowrap">{{ props.createdBy }}</span>
    <span class="nowrap">{{ props.testedBy ?? '---' }}</span>
  </div>
  <div class="badges">
    <slot></slot>
  </div>
</div>
</template>

<style scoped lang="scss">
.dashboard-list-item {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  height: 40px;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  & > .item-num {
    margin-right: 8px;
  }
  & > .branch {
    width: 30%;
    max-width: 300px;
    margin-right: 15px;
  }
  & > .column {
    display: flex;
    flex-direction: column;
    line-height: 15px;
    font-size: 13px;
    margin-right: 15px;
    gap: 2px;
    & > .column-line {
      display: flex;
      align-items: center;
      height: 15px;
    }
  }
  & > .badges {
    margin-left: auto;
    display: flex;
    gap: 5px;
  }
  &.clickable {
    cursor: pointer;
    &:hover {
      background-color: var(--row-bg-dark);
    }
    &:nth-child(odd) {
      background-color: var(--row-bg-light);
      &:hover {
        background-color: var(--row-bg-dark);
      }
    }
  }
}
</style>