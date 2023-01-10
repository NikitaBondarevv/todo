import { ITodo } from 'interfaces/ITodo'

export type TTaskProps = {
  onSubmit: (data: ITodo) => Promise<void>
  text?: string
}

export type TTarget = {
  target: {
    value: string
  }
}
