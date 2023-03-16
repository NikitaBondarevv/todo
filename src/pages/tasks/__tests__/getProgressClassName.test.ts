import { getProgressClassName } from '../getProgressClassName'
import styles from './styles.css'

describe('getProgressClassName', () => {
  test('should return styles.done if argument done === true', () => {
    expect(getProgressClassName(true)).toEqual(styles.done)
  })

  test('should return styles.progress and styles.updateTask if argument done === undefined', () => {
    expect(getProgressClassName(undefined)).toEqual(`${styles.progress} ${styles.updateTask}`)
  });

  test('should return styles.waiting and styles.updateTask if argument done === false', () => {
    expect(getProgressClassName(false)).toEqual(`${styles.waiting} ${styles.updateTask}`)
  });
})
