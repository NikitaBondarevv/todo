import styles from './styles.css'

export const Navigation = ({ titles, setActiveTab, activeTabIndex }) => {
  return (
    <nav>
      <ul className={styles.list} >
        {titles.map((title, index) =>
          <li key={index} className={activeTabIndex === index ? styles.active : ''} ><a href="#" onClick={() => setActiveTab(index)}>{title}</a></li>
        )}
      </ul>
    </nav>
  )
}