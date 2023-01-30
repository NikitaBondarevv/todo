import { Children, useState, useEffect, PropsWithChildren } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import { Navigation } from './navigation'
import { TTabsChildren, TTabsProos } from './types'
import { Preloader } from 'components/preloader'

export const Tabs = ({ selectedIndex, children, loading }: PropsWithChildren<TTabsProos>) => {
  const [index, setIndex] = useState(+selectedIndex)
  const [titles, setTitles] = useState<string[]>([])
  const [contents, setContents] = useState<Array<TTabsChildren['props']['children']>>([])

  const setTabs = () => {
    const tabs = Children.toArray(children) as TTabsChildren[]
    setTitles(tabs.map(component => component.props.title))
    setContents(tabs.map(component => component.props.children))
  }

  useEffect(() => {
    setTabs()
  }, [])

  useEffect(() => {
    setTabs()
  }, [children])

  const setActiveTab = (index: number) => setIndex(index)

  return (
    <div className={styles.content}>
      <Navigation titles={titles} activeTabIndex={index} setActiveTab={setActiveTab} />

      <div id={String(index)} className={styles.activeContent}>
        {
          loading
          ? <Preloader />
          : contents[index]
        }
      </div>
    </div>
  )
}

Tabs.defaultProps = {
  selectedIndex: 0
}

Tabs.propTypes = {
  selectedIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
