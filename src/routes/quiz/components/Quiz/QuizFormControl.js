import CustomRadioButton from '../../../../library/components/CustomRadioButton/CustomRadioButton'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import React from 'react'
//checked="checked"

class QuizFormControl extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: this.props.value,
      oldvalue: this.props.value
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(ev) {
    this.setState({ value: ev.target.checked })
    this.props.onClick(ev)
  }

  static getDerivedStateFromProps(nextProps, state) {
    if (nextProps.value && nextProps.value !== state.oldvalue) {
      return {
        value: nextProps.value,
        oldvalue: nextProps.value
      }
    }
    return state
  }

  render() {
    const { label, type, inputValue, onClick, name, ...other } = this.props
    const { value } = this.state
    switch (type) {
      case 'radio':
        return (
          <CustomRadioButton
            {...other}
            checked={!!(value && inputValue && value === inputValue)}
            label={label}
            autoComplete={name}
            name={name}
            value={inputValue}
            onClick={onClick}
          />
        )
      case 'checkbox':
        return (
          <Form.Check
            {...other}
            autoComplete={name}
            name={name}
            label={label}
            onChange={this.handleClick}
            checked={!!value}
            value={value}
            type={type}
          />
        )
      default:
        return (
          <Form.Control
            {...other}
            autoComplete={name}
            name={name}
            onChange={onClick}
            value={value}
            type={type}
            placeholder={label}
          />
        )
    }
  }
}

QuizFormControl.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  inputValue: PropTypes.any,
  required: PropTypes.bool,
  type: PropTypes.string,
  onChange: PropTypes.func,
  onClick: PropTypes.func
}

QuizFormControl.defaultProps = {
  className: undefined,
  label: '',
  name: undefined,
  value: undefined,
  required: false,
  type: 'text',
  onChange() {},
  onClick() {}
}

export default QuizFormControl
