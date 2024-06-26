import type { IDistrictItem, ILevelKey } from './interface'
import { Level } from './interface'

export function nextLevel(level: ILevelKey) {
  return Level[Level[level] + 1]
}

export function formatDistrictData(data = []): IDistrictItem[] {
  return data
    .map((item) => ({
      code: item.adcode,
      name: item.name
    }))
    .sort((a, b) => a.code - b.code)
}

// 获取省份信息
export function fetchDistrictList(level = 'country', searchKey = '中国'): Promise<{
  list: IDistrictItem[]
  boundaries: any[]
}> {
  return new Promise((resolve) => {
    new AMap.DistrictSearch({
      level: level, // 关键字对应的行政区级别，country 表示国家
      subdistrict: 1, // 显示下级行政区级数，1表示返回下一级行政区
      extensions: 'all' // 返回行政区边界坐标组等具体信息
    }).search(searchKey, function (status, result) {
      // status：complete 表示查询成功，no_data 为查询无结果，error 代表查询错误
      // 查询成功时，result 即为对应的行政区信息
      if (status == 'complete') {
        resolve({
          list: formatDistrictData(result.districtList[0].districtList || []),
          boundaries: result.districtList[0]?.boundaries || []
        })
      } else {
        resolve({
          list: [],
          boundaries: []
        })
      }
    })
  })
}

// 获取结构树
export async function fetchDistrictTree(maxLevel: 1 | 2 | 3 = 2) {
  let level = maxLevel
  if (maxLevel < 1 || maxLevel > 3) {
    level = 2
  }
  const provinceList = (await fetchDistrictList())['list']
  if (level > 1) {
    for (let i = 0; i < provinceList.length; i++) {
      const cityList = (await fetchDistrictList('province', provinceList[i].code))['list']
      if (level > 2) {
        for (let j = 0; j < cityList.length; j++) {
          cityList[i].children = (await fetchDistrictList('city', cityList[i].code))['list']
        }
      }
      provinceList[i].children = cityList
    }
  }
  return provinceList
}
