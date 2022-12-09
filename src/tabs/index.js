import { Children, Component } from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'
import { Navigation } from './navigation'

export class Tabs extends Component {
  static defaultProps = {
    selectedIndex: 0
  }

  static propTypes = {
    selectedIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }

  state = {
    index: +this.props.selectedIndex
  }

  constructor(...props) {
    super(...props)

    this.setTabs()
  }

  componentDidUpdate(prevProps) {
    if (this.props.children !== prevProps.children) {
      const { index } = this.state
      const isTabIndexExist = index <= this.props.children.length

      this.setTabs()
      this.setState({ index: isTabIndexExist ? index : 0 })
    }
  }

  setTabs() {
    this.tabs = Children.toArray(this.props.children)
    this.titles = this.tabs.map(component => component.props.title)
    this.dates = this.tabs.map(component => component.props.dates)
    this.contents = this.tabs.map(component => component.props.children)
  }

  setActiveTab = (index) => {
    this.setState({ index })
  }

  render() {
    const { index } = this.state
    const { titles = [], dates = [], contents = [] } = this

    return (
      <div className={styles.content}>
        <Navigation titles={titles} dates={dates} activeTabIndex={index} setActiveTab={this.setActiveTab} />

        <div id={index} className={index === index ? styles.activeContent : ''}>{contents[index]}</div>
      </div>
    )
  }
}
