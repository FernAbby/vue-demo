import { uuidv4 } from 'biz-gadgets'

export const generateDataSource = (length = 50) => {
  return new Array(length).fill(0, 0).map((item, index) => {
    return {
      id: uuidv4(),
      studentId: `1112023090100${index}`,
      name: `张三 ${index + 1}`,
      sex: Math.random() < 0.5 ? '男' : '女',
      mobile: '18888888888',
      class: '3年级2班',
      date: '2023-09-01',
      address: '成都市高新区天府二街世豪广场'
    }
  })
}

export const getDataSource = (length = 50) => {
  return Promise.resolve(generateDataSource(length))
}
