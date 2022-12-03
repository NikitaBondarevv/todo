import { Component } from "react";

export class EditableText extends Component {
  state = {
    hidden: true,
    value: ''
  }

  setValue = ({ target: { value }}) => {
    this.setState({ value });
  }

  handleBlur = (e) => {
    e.preventDefault();

    this.setState({ hidden: true });

    this.props.onLoose?.(this.state.value);
  }

  showInput = () => {
    this.setState({ hidden: false });
  }

  render() {
    const { value, hidden } = this.state;

    return (
      <>
        {
          hidden ? <span onClick={this.showInput}>{value ? value : 'Click me!'}</span> :
            <form onSubmit={this.handleBlur}>
              <input name="text" value={value} onChange={this.setValue} onBlur={this.handleBlur} autoFocus />
            </form>
        }
      </>
    )
  }
}
