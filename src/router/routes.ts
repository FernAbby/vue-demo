import DefaultLayout from '@/layout/DefaultLayout.vue'
import HomeView from '@/views/dashboard/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DefaultLayout,
    children: [
      {
        path: '/',
        name: 'home',
        component: HomeView
      },
      {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (About.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/dashboard/AboutView.vue')
      }
    ]
  },
  {
    path: '/examples',
    name: 'examples',
    component: () => import('../layout/StandardLayout/index.vue'),
    redirect: '/examples/guide',
    children: [
      {
        path: 'guide',
        name: 'guide',
        component: () => import('../views/examples/GuideView.vue')
      },
      {
        path: 'form',
        name: 'form',
        children: [
          {
            path: 'base',
            name: 'base-form',
            component: () => import('../views/examples/form-plus/base.vue')
          },
          {
            path: 'search-form',
            name: 'search-form',
            component: () => import('../views/examples/form-plus/search-form.vue')
          }
        ],
      },
      {
        path: 'table',
        name: 'table',
        children: [
          {
            path: 'base',
            name: 'base-table',
            component: () => import('../views/examples/TablePlus/Base.vue')
          },
          {
            path: 'data',
            name: 'data-table',
            component: () => import('../views/examples/TablePlus/DataTable.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/tools',
    name: 'tools',
    component: () => import('../layout/StandardLayout/index.vue'),
    redirect: '/tools/district-tree',
    children: [
      {
        path: 'district-tree',
        name: 'district-tree',
        component: () => import('@/views/tools/map/DistrictSearch/index.vue'),
      }
    ]
  },
  {
    path: '/devtools',
    name: 'devtools',
    component: () => import('../layout/StandardLayout/index.vue'),
    redirect: '/devtools/transitions',
    children: [
      {
        path: 'transitions',
        name: 'transitions',
        children: [
          {
            path: 'base',
            component: () => import('@/views/devtools/transitions/base.vue')
          }
        ]
      },
      {
        path: 'download',
        name: 'download',
        component: () => import('../views/devtools/DownloadView.vue')
      },
      {
        path: 'devtool',
        name: 'devtool',
        component: () => import('../views/devtools/DevToolView.vue')
      }
    ]
  }
]

export default routes
