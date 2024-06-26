// 示例 菜单
import type { IMenuItem } from '@/components/LeftMenu/interface'

export const examplesMenuList: IMenuItem[] = [
  {
    title: '概览',
    path: '/examples/guide'
  },
  {
    title: '表单',
    path: '/examples/form/base',
    children: [
      {
        title: '基础表单',
        path: '/examples/form/base'
      },
      {
        title: '搜索表单',
        path: '/examples/form/search-form'
      }
    ]
  },
  {
    title: '表格',
    path: '/examples/table',
    children: [
      {
        title: '基础表格',
        path: '/examples/table/base'
      },
      {
        title: '数据表格',
        path: '/examples/table/data'
      }
    ]
  }
]

export const toolsMenuList = [
  {
    title: '省市区联动数据',
    path: '/tools/district-tree',
  }
]

// 调试 菜单
export const devtoolsMenuList = [
  {
    title: '动画',
    path: '/devtools/transitions',
    children: [
      {
        title: '折叠动画',
        path: '/devtools/transitions/base'
      }
    ]
  },
  {
    title: '下载',
    path: '/devtools/download'
  },
  {
    title: '调试',
    path: '/devtools/devtool'
  }
]

export default {
  devtools: devtoolsMenuList,
  examples: examplesMenuList,
  tools: toolsMenuList,
}

