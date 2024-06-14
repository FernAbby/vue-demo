<template>
  <BepTablePlus :schema="schema" :columns="columns" :data="dataSource" @search="handleSearch" />
</template>
<script lang="ts" setup>
  import { BepTablePlus } from 'bep-ui'
  import { computed } from 'vue'
  import type { ITablePlusProps } from 'bep-ui'
  import { schema } from './schema'
  import { columns } from './columns'
  import { generateDataSource } from './data'

  const dataSource = computed(() => {
    return generateDataSource()
  })

  const handleSearch: ITablePlusProps['onSearch'] = ({ sp, pp }) => {
    console.log('handleSearch====>', sp, pp)
  }
</script>
