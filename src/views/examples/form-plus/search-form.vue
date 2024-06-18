<template>
  <BepSearchForm :schema="schema" />
</template>
<script lang="ts" setup>
  import { genNumberArray } from 'biz-gadgets'
  import { BepSearchForm } from 'bep-ui'
  import { courses } from '@/const/course'

  const schema: IFormSchema = {
    name: {
      title: '姓名',
      renderType: 'InputText'
    },
    age: {
      title: '年龄',
      renderType: 'InputNumber',
      renderOptions: {
        controls: false,
      }
    },
    birthday: {
      title: '生日',
      renderType: 'DateTime',
    },
    grade: {
      title: '年级',
      renderType: 'Select',
      renderOptions: {
        options: genNumberArray(6, 1).map((num) => ({
          label: `${num}年级`,
          value: `${num}`
        }))
      }
    },
    class: {
      title: '班级',
      renderType: 'Select',
      disabled: '$.grade != 1',
      renderOptions: {
        options: genNumberArray(5, 1).map((num) => ({
          label: `1年级${num}班`,
          value: `${num}`
        }))
      }
    },
    course: {
      title: '课程',
      renderType: 'SearchSelect',
      hidden: '!$.grade',
      renderOptions: {
        remoteMethod: (query: string) => {
          return Promise.resolve(courses.filter((item) => item.label.includes(query)))
        }
      }
    }
  }
</script>
