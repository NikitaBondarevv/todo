import styles from './styles.css'

export const getProgressClassName = (done: boolean) => {
  if (done) return styles.done

  if (done === undefined) return `${styles.progress} ${styles.updateTask}`

  return `${styles.waiting} ${styles.updateTask}`
}
