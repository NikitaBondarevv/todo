import { Children, Component } from 'react'
import PropTypes from 'prop-types';

import styles from './styles.css'
import { Navigation } from './navigation'

export class TabsTasks extends Component {
  static defaultProps = {
    selectedIndex: 0
  }

  static propTypes = {
    selectedIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }

  state = {
    index: 0
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

  componentDidMount() {
    this.setState({ index: +this.props.selectedIndex })
  }

  setTabs() {
    this.tabs = Children.toArray(this.props.children)
    this.titles = this.tabs.map(component => component.props.title)
    this.contents = this.tabs.map(component => component.props.children)
  }


  setActiveTab = (index) => {
    this.setState({ index })
  }

  render() {
    const { index } = this.state
    const { titles = [], contents = [] } = this
    
    return (
      <>
        <Navigation className={styles.tabs} titles={titles} activeTabIndex={index} setActiveTab={this.setActiveTab} />

        <ul id={index} className={styles.tasksList}>{contents[index]}</ul>
      </>
    )
  }
}
