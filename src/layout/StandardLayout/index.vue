<template>
  <div class="standard-page-layout">
    <div class="standard-page-layout__left-menu">
      <LeftMenu :items="leftMenus" />
    </div>
    <div class="standard-page-layout__content">
      <RouterView />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { RouterView, useRouter } from 'vue-router'
  import LeftMenu from '@/components/LeftMenu/index.vue'
  import menus from '@/layout/StandardLayout/menu'
  import { computed, watch, ref } from 'vue'
  const router = useRouter()
  const currentModule = ref('')
  const leftMenus = ref([])

  watch(
    () => router.currentRoute.value,
    (route) => {
      const module = route.path?.match(/^\/(devtools|examples)\/.*?$/)[1]
      if (currentModule.value !== module) {
        // console.log('module===>', module)
        currentModule.value = module
        leftMenus.value = menus[module] || []
      }
    },
    { immediate: true }
  )
</script>
<style lang="scss">
  .standard-page-layout {
    width: 100%;
    height: 100%;
    display: flex;
    box-sizing: border-box;

    .standard-page-layout__left-menu {
      width: 200px;
      height: calc(100vh - 46px);
      padding: 12px;
      border-right: 1px solid var(--color-border);
    }

    .standard-page-layout__content {
      flex: 1;
      width: 0;
      padding: 12px;
      overflow-y: auto;
    }
  }
</style>
