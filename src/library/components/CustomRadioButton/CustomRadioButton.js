import './CustomRadioButton.css'
import PropTypes from 'prop-types'
import React from 'react'

class CustomRadioButton extends React.PureComponent {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      checked: this.props.checked
    }
  }

  handleChange(ev) {
    this.setState(
      state => ({
        checked: !state.checked
      }),
      () => this.props.onChange(ev, this.state.checked)
    )
  }

  render() {
    const { className, label, value, name, required, onClick, style } = this.props
    return (
      <label style={style} className={`customRadioButton ${className}`}>
        {label}
        <input
          onChange={this.handleChange}
          onClick={onClick}
          type="radio"
          required={required}
          checked={this.props.checked}
          name={name}
          value={value}
        />
        <span className="checkmark" />
      </label>
    )
  }
}

CustomRadioButton.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  style: PropTypes.object
}

CustomRadioButton.defaultProps = {
  className: undefined,
  label: '',
  name: undefined,
  value: undefined,
  required: false,
  checked: false,
  style: undefined,
  onChange() {},
  onClick() {}
}

export default CustomRadioButton
