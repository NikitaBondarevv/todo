import styles from './styles.css'

export const Preloader = () => (
  <div className={styles.preloader}>
    <div className={styles.loadingioSpinner}>
      <div className={styles.loader}>
        <div></div>
      </div>
    </div>
  </div>
)
