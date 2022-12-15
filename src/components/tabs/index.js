import { Children, useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import { Navigation } from './navigation'

export const Tabs = ({ selectedIndex, children, activeTabIndex }) => {
  const [index, setIndex] = useState(+selectedIndex)
  const [titles, setTitles] = useState([])
  const [contents, setContents] = useState([])

  const setTabs = () => {
    const tabs = Children.toArray(children)
    setTitles(tabs.map(component => component.props.title))
    setContents(tabs.map(component => component.props.children))
  }

  useEffect(() => {
    setTabs()
  }, [])

  useEffect(() => {
    setTabs()
  }, [children])

  const setActiveTab = index => setIndex(index)

  return (
    <div className={styles.content}>
      <Navigation titles={titles} activeTabIndex={index} setActiveTab={setActiveTab} />

      <div id={index} className={styles.activeContent}>{contents[index]}</div>
    </div>
  )
}

Tabs.defaultProps = {
  selectedIndex: 0
}

Tabs.propTypes = {
  selectedIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
