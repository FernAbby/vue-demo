<template>
  <div class="left-menu-wrap">
    <MenuItems :items="menuList"/>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import MenuItems from '@/components/LeftMenu/MenuItems.vue'
  import type { IMenuItem } from '@/components/LeftMenu/interface'
  import { onMounted } from 'vue'
  import { setExpandAttr } from '@/components/LeftMenu/utils'
  defineOptions({
    name: 'LeftMenu',
  })
  const props = defineProps({
    items: {
      type: Array as () => IMenuItem[],
      default: () => ([])
    },
    defaultCollapse: {
      type: Boolean,
      default: false
    }
  })

  const menuList = ref([])

  onMounted(() => {
    menuList.value = setExpandAttr(props.items, props.defaultCollapse)
  })
</script>
<style lang="scss">
  @mixin router-link {
  > a {
    display: block;
    height: 34px;
    line-height: 34px;
    padding: 0 0 0 14px;
    font-size: 13px;
    border-radius: 4px;
    color: hsla(210, 4%, 40%, 1);
    box-sizing: border-box;
  }

  > a.router-link-active {
    color: hsla(160, 100%, 37%, 1);
    background-color: hsla(160, 100%, 37%, 0.18) !important;
  }

  > a:hover {
    color: hsla(160, 100%, 37%, 0.8);
    background-color: transparent;
  }
}
  .left-menu-wrap {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    @include router-link;

    .catalog-title {
      display: flex;
      align-items: center;

      span {
        display: inline-block;
        flex: 1;
        width: 0;
      }
    }

    .sub-menu {
      margin-left: 20px;

      @include router-link;
    }
  }
</style>