import type { ITableColumn } from 'bep-ui'

export const columns: ITableColumn[] = [
  {
    title: '学号',
    dataIndex: 'studentId',
  },
  {
    title: '姓名',
    dataIndex: 'name',
    columnProps: {
      width: 100
    }
  },
  {
    title: '性别',
    dataIndex: 'sex'
  },
  {
    title: '联系方式',
    dataIndex: 'mobile'
  },
  {
    title: '班级',
    dataIndex: 'class'
  },
  {
    title: '入学时间',
    dataIndex: 'date'
  },
  {
    title: '家庭地址',
    dataIndex: 'address',
    columnProps: {
      width: 250
    }
  }
]
