import { css, StyleSheet } from 'aphrodite/no-important'
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import PropTypes from 'prop-types'

class Quiz extends Component {
  constructor(props) {
    super(props)

    this.formSubmit = this.formSubmit.bind(this)
    this.buttonClick = this.buttonClick.bind(this)
    this.buttonValue = undefined
  }

  buttonClick(ev) {
    this.buttonValue = this.props.quiz.buttons.find(b => b.text.toLowerCase() === ev.target.textContent.toLowerCase())
  }

  formSubmit(ev) {
    ev.preventDefault()
    this.props.onSubmit(ev, this.buttonValue)
  }

  render() {
    const { quiz, answer, firstName } = this.props
    const question = quiz.question.replace('FirstName', firstName)
    return (
      <React.Fragment>
        <h3>{question}</h3>

        <Form onSubmit={this.formSubmit} className={css(styles.form)}>
          <Form.Row>
            {quiz.elements.map(item => (
              <Form.Group key={item.field} as={Col} controlId={`formGrid${item.field}`}>
                <Form.Control
                  value={answer && answer.find(a => a.field === item.field).value}
                  type={item.type}
                  name={item.field}
                  required
                  placeholder={item.placeHolder}
                />
              </Form.Group>
            ))}
          </Form.Row>
          <Form.Row className={css(styles.buttonRow)}>
            {quiz.buttons.map(item => (
              <Form.Group key={item.text.trim()} as={Col}>
                <Button
                  className={css(styles.button)}
                  variant="secondary"
                  name={item.field}
                  type="submit"
                  onClick={this.buttonClick}
                >
                  {item.text}
                </Button>
              </Form.Group>
            ))}
          </Form.Row>
        </Form>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    // margin: 58,
    textTransform: 'uppercase'
  },
  buttonRow: {
    marginTop: 58
  },
  form: {
    maxWidth: 480,
    margin: '58px auto',
    ':nth-child(1n) .form-row': {
      '@media (max-width: 500px)': {
        flexDirection: 'column'
      }
    }
  }
})

Quiz.propTypes = {
  quiz: PropTypes.object.isRequired,
  answer: PropTypes.object,
  onSubmit: PropTypes.func,
  firstName: PropTypes.string
}

Quiz.defaultProps = {
  answer: undefined,
  firstName: 'unknown',
  onSubmit() {}
}

export default Quiz
