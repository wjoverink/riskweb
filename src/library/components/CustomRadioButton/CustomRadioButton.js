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
    const { className, label, value, name, required, onClick, style, autoFocus, autoComplete, tabIndex } = this.props
    return (
      <label style={style} className={`customRadioButton ${className}`}>
        {label}
        <input
          onChange={this.handleChange}
          onClick={onClick}
          type="radio"
          autoFocus={autoFocus}
          required={required}
          checked={this.props.checked}
          name={name}
          value={value}
          tabIndex={tabIndex}
          autoComplete={autoComplete}
        />
        <span className="checkmark" />
      </label>
    )
  }
}

CustomRadioButton.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  required: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  style: PropTypes.object,
  autoFocus: PropTypes.bool,
  tabIndex: PropTypes.number
}

CustomRadioButton.defaultProps = {
  autoComplete: undefined,
  className: undefined,
  label: '',
  name: undefined,
  value: undefined,
  required: false,
  checked: false,
  style: undefined,
  autoFocus: false,
  tabIndex: 0,
  onChange() {},
  onClick() {}
}

export default CustomRadioButton
