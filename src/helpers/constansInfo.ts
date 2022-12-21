import { IInfo } from 'interfaces/IInfo'

export const getTasksInfo = (info: IInfo) => [
  {
    text: 'You have ',
    amount: info.total,
    otherText: ' tasks'
  },
  {
    text: 'Done: ',
    amount: info.done,
    styles: 'done'
  },
  {
    text: 'In progress: ',
    amount: info.inProgress,
    styles: 'inProgress'
  },
  {
    text: 'Waiting: ',
    amount: info.waiting,
    styles: 'waiting'
  }
]
