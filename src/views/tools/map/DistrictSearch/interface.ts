export interface IDistrictItem {
  code: string
  name: string
}

export enum Level {
  country ,
  province,
  city,
  district,
  street
}

export type ILevel = `${Level}`
export type ILevelKey = keyof typeof Level
