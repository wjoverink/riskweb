import { css, StyleSheet } from 'aphrodite/no-important'
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import React, { Component } from 'react'
import arrowleft from '../../../../images/arrow-left.png'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { compose } from 'redux'
import { connect } from 'react-redux'
import Form from 'react-bootstrap/Form'
import MiniLoader from '../../../../library/components/miniLoader/MiniLoader'
import PreloadImage from 'react-preload-image'
import PropTypes from 'prop-types'
import quizJSON from '../../../../settings/quiz'

class QuizPage extends Component {
  constructor(props) {
    super(props)

    document.title = this.props.page.title

    this.formSubmit = this.formSubmit.bind(this)
  }

  formSubmit(ev) {
    this.props.firestore.add('answers', {
      FirstName: ev.target[0].value,
      LastName: ev.target[1].value
    })
  }

  render() {
    const {
      page: { img },
      question,
      buttonText,
      elements,
      isLoading,
      prevId,
      nextId
    } = this.props

    return (
      <main>
        <div className={css(styles.border)}>
          {prevId >= 0 && (
            <a className={css(styles.backLink)} href={'/quiz/' + prevId}>
              <img className={css(styles.arrowLeft)} alt="previous question" src={arrowleft} />
            </a>
          )}

          <div className={css(styles.mainInfo, styles.popular)}>
            <PreloadImage
              style={{
                ...img.size,
                margin: '0 auto',
                display: 'block',
                backgroundColor: img.color,
                position: 'relative',
                marginBottom: 36
              }}
              lazy
              src={img.src}
              alt={img.alt}
            />
            {!isLoading && (
              <React.Fragment>
                <h3>{question}</h3>

                <Form onSubmit={this.formSubmit} className={css(styles.form)}>
                  <Form.Row>
                    {elements.map(item => (
                      <Form.Group key={item.name} as={Col} controlId={`formGrid${item.name}`}>
                        <Form.Control
                          //value={quizAnswers ? quizAnswers[i] : undefined}
                          type={item.type}
                          placeholder={item.placeHolder}
                        />
                      </Form.Group>
                    ))}
                  </Form.Row>
                  {nextId >= 0 && (
                    <Button className={css(styles.button)} variant="secondary" href={'/quiz/' + nextId}>
                      {buttonText}
                    </Button>
                  )}
                </Form>
              </React.Fragment>
            )}
            {isLoading && <MiniLoader />}
            <aside className={`${css(styles.skout)} d-lg-block`}>
              <span>POWERED BY</span>
              <span style={{ fontSize: 72, fontWeight: 500, marginTop: -30 }}>SKOUT</span>
            </aside>
          </div>
        </div>
      </main>
    )
  }
}

const styles = StyleSheet.create({
  skout: {
    display: 'flex!important',
    justifyContent: 'start',
    alignItems: 'center',
    flexDirection: 'column',
    fontWeight: 500,
    marginTop: 200
  },
  backLink: {
    width: 90,
    height: 100,
    position: 'fixed',
    top: ' calc(50% - 50px)',
    display: 'flex',
    ':hover': {
      opacity: 0.6
    }
  },
  arrowLeft: {
    width: 32,
    height: 32,
    alignSelf: 'center',
    margin: '0 auto'
  },
  mainInfo: {
    maxWidth: 1050,
    padding: '20px 20px',
    margin: '0 auto',
    textAlign: 'center'
  },
  border: {
    border: '1px solid #dfdfdf',
    borderLeft: 0,
    borderRight: 0,
    borderTop: 0,
    padding: '54px 0px 100px 0px',
    marginTop: -1,
    backgroundColor: '#f6f6f6'
  },
  button: {
    width: 200,
    margin: 58,
    textTransform: 'uppercase'
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

QuizPage.propTypes = {
  question: PropTypes.string,
  buttonText: PropTypes.string,
  elements: PropTypes.array,
  isLoading: PropTypes.bool,
  isFirst: PropTypes.bool,
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  }).isRequired,
  firestore: PropTypes.object.isRequired,
  prevId: PropTypes.number,
  nextId: PropTypes.number
}

QuizPage.defaultProps = {
  question: undefined,
  buttonText: undefined,
  elements: [],
  isLoading: true,
  isFirst: true,
  prevId: -1,
  nextId: -1
}

function mapStateToProps({ pages, quizAnswers, firestore }, { match }) {
  const id = match.params.quizId ? match.params.quizId : '0'
  // const quiz =
  //   firestore.ordered.quiz && firestore.ordered.quiz.find(q => q.id === id);
  const quiz = quizJSON.quiz.find(q => q.id === id)
  const prevId = parseInt(id) - 1
  let nextId = parseInt(id) + 1
  const nextQuiz = quizJSON.quiz.find(q => q.id === (parseInt(id) + 1).toString())
  nextId = nextQuiz ? nextId : -1
  return {
    page: pages.find(page => page.name === 'quiz'),
    quizAnswers: quizAnswers.find(q => q.id === id),
    question: quiz && quiz.question,
    buttonText: quiz && quiz.button,
    elements: quiz && quiz.elements, //.map(i => JSON.parse(i)),
    isLoading: !isLoaded(quiz),
    prevId,
    firestore,
    nextId
  }
}

export default compose(
  firestoreConnect([{ collection: 'quiz' }]),
  connect(mapStateToProps)
)(QuizPage)
