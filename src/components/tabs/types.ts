import { ReactNode } from 'react'

export type TTabsProos = {
  selectedIndex: number | string
}

export type TTabsChildren = {
  props: {
    title: string
    children: ReactNode
  }
}
