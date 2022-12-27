import { IData } from 'interfaces/IData'

export type TTaskProps = {
  onSubmit: (data: IData) => Promise<void>
  text?: string
}

export type TTarget = {
  target: {
    value: string
  }
}
