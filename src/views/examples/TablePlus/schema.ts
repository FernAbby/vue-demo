import type { IFormSchema } from 'bep-ui'

export const schema: IFormSchema['properties'] = {
  name: {
    title: '姓名',
    renderType: 'InputText'
  },
  sex: {
    title: '性别',
    renderType: 'Select',
    renderOptions: {
      options: [
        {
          label: '男',
          value: 'male'
        },
        {
          label: '女',
          value: 'female'
        }
      ]
    }
  },
  grade: {
    title: '班级',
    renderType: 'InputText'
  },
  date: {
    title: '入学时间',
    renderType: 'DateTime'
  }
}
