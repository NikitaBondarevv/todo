import { Children, Component } from 'react'

import styles from './styles.css'
import { Navigation } from './navigation'

export class Tabs extends Component {
  state = {
    index: 0
  }

  constructor(...props) {
    super(...props)

    this.setTabs()
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.children !== prevProps.children ) {
      const { index } = this.state
      const isTabIndexExist = index <= this.props.children.length

      this.setTabs()
      this.setState({ index: isTabIndexExist ? index : 0 })
    }
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
    const {titles = [], contents = [] } = this

    return (
      <>
        <Navigation titles={titles} activeTabIndex={index} setActiveTab={this.setActiveTab} />

        <div id={index} className={styles.content} >{contents[index]}</div>
      </>
    )
  }
}
