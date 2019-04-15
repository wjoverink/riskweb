import CustomRadioButton from '../../../../library/components/CustomRadioButton/CustomRadioButton'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import React from 'react'
//checked="checked"
function QuizFormControl({ label, value, type, inputValue, onClick, ...other }) {
  if (type === 'radio') {
    return (
      <CustomRadioButton
        {...other}
        checked={!!(value && inputValue && value === inputValue)}
        label={label}
        value={inputValue}
        onClick={onClick}
      />
    )
  }
  return <Form.Control onChange={onClick} {...other} value={value} type={type} placeholder={label} />
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
