import { css, StyleSheet } from 'aphrodite/no-important'
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import getText from '../../../../library/util/skeletonText'
import { isArray } from 'lodash'
import PropTypes from 'prop-types'
import QuizFormControl from './QuizFormControl'
import SkeletonLoader from '../../../../library/components/SkeletonLoader'

class Quiz extends Component {
  constructor(props) {
    super(props)

    this.formSubmit = this.formSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)

    this.submitButtonRef = React.createRef()
  }

  handleClick() {
    const { quiz } = this.props
    if (quiz.buttons[0] && quiz.buttons[0].hidden) {
      this.submitButtonRef.current.click()
    }
  }

  formSubmit(ev) {
    ev.preventDefault()
    this.props.onSubmit(ev)
  }

  render() {
    const { answer, quiz, firstName } = this.props
    const question = quiz && quiz.question.replace('FirstName', firstName)
    const hasGroups = quiz && isArray(quiz.groups)
    const hasButtons = quiz && isArray(quiz.buttons)
    let tabindex = 1

    return (
      <React.Fragment>
        <h1 className={css(styles.quiz)}>{getText(question, 2)}</h1>

        <Form onSubmit={this.formSubmit} className={css(styles.form)}>
          <Form.Row>
            {hasGroups &&
              quiz.groups.map((group, i) => (
                <Form.Group key={i} as={Col}>
                  {group &&
                    group.map(item => {
                      const an = answer && answer.find(a => a.field === item.field)
                      const value = an && an.value

                      return (
                        <QuizFormControl
                          key={item.placeHolder.trim()}
                          value={value}
                          inputValue={item.value}
                          onClick={this.handleClick}
                          tabIndex={tabindex++}
                          style={item.style}
                          type={item.type}
                          name={item.field}
                          className={css(styles.radioButton)}
                          required={true}
                          label={item.placeHolder}
                        />
                      )
                    })}
                </Form.Group>
              ))}
            {!hasGroups && !hasButtons && (
              <SkeletonLoader widthRandomness={0} width={'400px'} height={'38px'} count={1} />
            )}
          </Form.Row>
          {hasButtons &&
            quiz.buttons.map(item => (
              <Button
                key={item.text.trim()}
                className={css(styles.button, item.hidden && styles.buttonHidden)}
                variant="secondary"
                name={item.field}
                type={item.type || 'submit'}
                href={item.type ? item.goto : undefined}
                ref={this.submitButtonRef}
                tabIndex={tabindex++}
              >
                {item.text}
              </Button>
            ))}
          {!hasButtons && <SkeletonLoader widthRandomness={0} width={'200px'} height={'38px'} count={1} />}
        </Form>
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 200,
    textTransform: 'uppercase'
  },
  buttonHidden: {
    display: 'none'
  },
  buttonRow: {
    marginTop: 44
  },
  radioButton: {
    minWidth: 200,
    margin: '0px auto 1em auto'
  },
  quiz: {
    fontSize: 62,
    minWidth: 300,
    '@media (max-width: 768px)': {
      fontSize: 38
    }
  },
  form: {
    maxWidth: 420,
    margin: '58px auto',
    ':nth-child(1n) .form-row': {
      '@media (max-width: 500px)': {
        flexDirection: 'column'
      }
    }
  }
})

Quiz.propTypes = {
  quiz: PropTypes.object,
  answer: PropTypes.array,
  onSubmit: PropTypes.func,
  firstName: PropTypes.string
}

Quiz.defaultProps = {
  answer: undefined,
  firstName: 'unknown',
  onSubmit() {}
}

export default Quiz
