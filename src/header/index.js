import styles from './styles.css'
import logo from '../../images/logo.png'
import { EditableText } from '../editableText';

export const Header = () => {
  const links = ['Home', 'Task list', 'Contacts']

  return (
    <header className={styles.header}>
      <img src={logo} />
      <nav>
        <ul className={styles.list}>
          {links.map((link, index) => <li key={index} ><a href="/" className={styles[`${link.toLowerCase().replace(/\s+/, '-')}`]} >{link}</a></li>)}
        </ul>
      </nav>
      <EditableText />
    </header>
  )
}
