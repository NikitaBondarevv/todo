export interface TData {
  day: string
  id: string
  title: string
  done: boolean
}

export type TTaskProps = {
  data: TData
  getTasks: () => void
}

export type TTaskListProps = {
  tasks: TData[]
  getTasks: () => void
  activeTabIndex: number
}
