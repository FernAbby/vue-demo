const menuList = [
  {
    title: '概览',
    key: 'guide',
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
  },
  {
    title: '动画',
    path: '/examples/transitions',
    children: [
      {
        title: '折叠动画',
        path: '/examples/transitions/base'
      }
    ]
  },
  {
    title: '下载',
    path: '/examples/download'
  },
  {
    title: '调试',
    path: '/examples/devtool'
  }
]
export default menuList
