<template>
   <template v-for="item in items" :key="item.path">
      <template v-if="!item.children?.length">
        <RouterLink class="menu-item" :to="item.path">{{ item.title }}</RouterLink>
      </template>
      <template v-else>
        <a class="catalog-title" @click.prevent.stop="handleToggle(item)">
          <span>{{ item.title }}</span>
          <el-icon :size="14">
            <Transition mode="out-in" name="arrow">
              <template v-if="item.isExpand"><ArrowDown /></template>
              <template v-else><ArrowRight /></template>
            </Transition>
          </el-icon>
        </a>
        <Transition name="accordion">
          <div v-if="item.isExpand" class="sub-menu">
            <MenuItems :items="item.children" />
          </div>
        </Transition>
      </template>
   </template>
</template>
<script lang="ts" setup>
  import { ArrowDown, ArrowRight } from '@element-plus/icons-vue'
  import type { IMenuItem } from './interface'

  defineOptions({
    name: 'MenuItems',
  })
  defineProps({
    items: {
      type: Array as () => IMenuItem[],
      default: () => ([])
    },
    defaultCollapse: {
      type: Boolean,
      default: false
    }
  })
  const handleToggle = (item) => {
    item.isExpand = !item.isExpand
    // console.log('点击===>', item.isExpand, item.title)
  }
</script>
<style lang="scss">
  .accordion-enter-active,
  .accordion-leave-active {
    transition: all 0.3s ease-in-out;
    max-height: 300px;
  }

  .accordion-enter-from,
  .accordion-leave-to {
    max-height: 0;
    opacity: 0;
  }

  .arrow-enter-active,
  .arrow-leave-active {
    transition: all 0.18s ease-in-out;
    transform: rotateZ(90deg);
  }

  .arrow-enter-from,
  .arrow-leave-to {
    transform: rotateZ(0deg);
  }
</style>
