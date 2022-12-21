export interface TData {
  day: string
  id: string
  title: string
  done: boolean
}

export type TTaskProps = {
  data: TData
  getTasks: Function
}

export type TTaskListProps = {
  tasks: TData[]
  getTasks: (task: TData) => void
  activeTabIndex: number
}
