import styles from './styles.css'

export const Preloader = ({ size = 120, className = '' }) => (
  <div className={`${styles.preloader} ${className}`} style={{width: `${size}px`, height: `${size}px`, borderWidth: `${size / 6}px`}} />
)
