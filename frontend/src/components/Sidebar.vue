<script setup>
import {ref} from "vue";

defineProps({
  active: String,
})

const items = ref([
  {src: '/', label: 'Dashboard', icon: 'io-home-outline'},
  {src: '/modules', label: 'Modules', icon: 'io-extension-puzzle-outline'},
  {src: '/tests', label: 'Tests', icon: 'io-checkmark-done-outline'},
  {src: '/team', label: 'Team', icon: 'io-people-outline'},
])
</script>

<template>
  <div class="sidebar">
    <div class="logo-wrapper">
      <img src="/logo.png" alt="logo">
    </div>
    <a v-for="item in items" class="item" :href="item.src">
      <oh-vue-icon :name="item.icon" scale="2" />
      <span class="label">{{ item.label }}</span>
    </a>
  </div>
</template>

<style lang="scss">
.sidebar {
  width: 90px;
  background: var(--sidebar-bg);
  position: fixed;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  box-sizing: border-box;
  > * {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
  }
  > .logo-wrapper {
    margin: 5px 0 20px;
    img {
      width: 69px;
      height: 42px;
      margin: inherit;
      padding: inherit;
    }
  }
  > a.item {
    flex-wrap: nowrap;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 0;
    text-decoration: none;
    color: var(--text-color-active);
    .ov-icon {
      line-height: 24px;
      height: 24px;
    }
    span.label {
      text-decoration: none;
      font-size: 12px;
    }

    &.active {
      background-color: var(--sidebar-active-bg);
      & > .ov-icon {
        color: var(--sidebar-active-text);
      }
      & > span.label {
        color: var(--sidebar-active-text);
        font-weight: bold;
      }
    }

    &:hover {
      background-color: var(--sidebar-hover-bg);
      color: var(--sidebar-hover-text);
      & > .ov-icon {
        color: var(--link-hover);
      }
      & > span.label {
        color: var(--link-hover);
      }
    }
  }
}
</style>