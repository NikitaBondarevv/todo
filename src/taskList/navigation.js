import styles from './styles.css'

import PropTypes from 'prop-types'

export const Navigation = ({ titles, setActiveTab, activeTabIndex }) => {
  return (
    <nav className={styles.tabsNav} >
      <ul className={styles.list} >
        {titles.map((title, index) =>
          <li key={index} className={activeTabIndex === index ? styles.active : ''} ><a href="#" onClick={() => setActiveTab(index)}>{title}</a></li>
        )}
      </ul>
    </nav>
  )
}

Navigation.defaultProps = {
  titles: [],
  activeTabIndex: 0,
  setActiveTab: function () {},
}

Navigation.propTypes = {
  titles: PropTypes.array,
  activeTabIndex: PropTypes.number,
  setActiveTab: PropTypes.func,
}
