import { Component } from 'react';
import PropTypes from 'prop-types';

export class EditableText extends Component {
  static defaultProps = {
    onLoose: () => { }
  }

  static propTypes = {
    onLoose: PropTypes.func
  }

  state = {
    hidden: true,
    value: ''
  }

  setValue = ({ target: { value } }) => {
    this.setState({ value });
  }

  handleBlur = (e) => {
    e.preventDefault();

    this.setState({ hidden: true });

    this.props.onLoose(this.state.value);
  }

  showInput = () => {
    this.setState({ hidden: false });
  }

  render() {
    const { value, hidden } = this.state;

    return (
      <div>
        {
          hidden ? <span onClick={this.showInput}>{value ? value : this.props.text}</span> :
          <form onSubmit={this.handleBlur}>
            <input name="text" value={value} onChange={this.setValue} onBlur={this.handleBlur} autoFocus />
          </form>
        }
      </div>
    )
  }
}
