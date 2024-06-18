export interface IMenuItem {
  title: string
  path: string
  isExpand?: boolean
  children?: IMenuItem[]
}