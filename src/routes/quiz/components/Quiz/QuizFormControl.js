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
    if (type === 'radio') {
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
    }
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
