import PropTypes from 'prop-types'

import styles from './styles.css'
import { getDates } from '../../helpers/constans'

export const Navigation = ({ titles, setActiveTab, activeTabIndex }) => (
  <nav>
    <ul className={styles.list}>
      {titles.map((title, index) => (
        <li key={index} className={activeTabIndex === index ? styles.active : ''}>
          <a onClick={() => setActiveTab(index)}>
            {title}
            <br />
            <time className={styles.dates}>{getDates()[index]}</time>
          </a>
        </li>
      ))}
    </ul>
  </nav>
)

Navigation.defaultProps = {
  titles: [],
  activeTabIndex: 0,
  setActiveTab: () => { },
}

Navigation.propTypes = {
  titles: PropTypes.array,
  activeTabIndex: PropTypes.number,
  setActiveTab: PropTypes.func,
}
