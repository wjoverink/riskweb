import CustomRadioButton from '../../../../library/components/CustomRadioButton/CustomRadioButton'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'
import React from 'react'
//checked="checked"

class QuizFormControl extends React.Component {
  render() {
    const { label, value, type, inputValue, onClick, name, ...other } = this.props
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
