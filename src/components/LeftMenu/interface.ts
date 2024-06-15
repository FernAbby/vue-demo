export interface IMenuItem {
  title: string
  path: string
  children?: IMenuItem[]
}