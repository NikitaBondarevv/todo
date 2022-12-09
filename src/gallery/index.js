import styles from './styles.css'
import htmlIcon from './images/html.png'
import jsIcon from './images/javaScript.png'
import cssIcon from './images/css.png'
import nodeJSIcon from './images/nodejs.png'
import reactIcon from './images/react.png'
import sassIcon from './images/sass.png'

const images = [htmlIcon, jsIcon, cssIcon, nodeJSIcon, reactIcon, sassIcon]

export const Gallery = () => (
  <ul className={styles.gallery}>
    {
      images.map((image, index) => <li key={index}><img className={styles.image} src={image} /></li>)
    }
  </ul>
)
