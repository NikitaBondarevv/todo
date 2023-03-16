import { ReactNode } from 'react'

export type TTabsProos = {
  selectedIndex: number | string
  loading: boolean
}

export type TTabsChildren = {
  props: {
    title: string
    children: ReactNode
  }
}

export type TNavigationProps = {
  titles: string[]
  setActiveTab: (index: number) => void
  activeTabIndex: number
}
