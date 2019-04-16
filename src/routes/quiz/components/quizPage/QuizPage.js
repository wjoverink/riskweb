import { css, StyleSheet } from 'aphrodite/no-important'
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import React, { Component } from 'react'
import { addAnswer } from '../../../../redux/actions/answers'
import arrowleft from '../../../../images/arrow-left.png'
import { compose } from 'redux'
import { connect } from 'react-redux'
import MiniLoader from '../../../../library/components/miniLoader/MiniLoader'
import PoweredBySkoutLogo from '../../../../library/components/logos/PoweredBySkoutLogo'
import PreloadImage from 'react-preload-image'
import PropTypes from 'prop-types'
import Quiz from '../Quiz/Quiz'
import { withRouter } from 'react-router-dom'

class QuizPage extends Component {
  constructor(props) {
    super(props)

    document.title = this.props.page.title
    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      formData: {}
    }
  }

  onSubmit(ev) {
    const { history, quizType, quiz } = this.props

    const data = new FormData(ev.target)

    var arr = Array.from(data.entries()).map(item => ({ field: item[0], value: item[1] }))
    const button = quiz.buttons[0]
    this.setState(state => {
      const data = state.formData
      data[quiz.id] = arr
      return {
        formData: data
      }
    })

    this.props.addAnswer(arr)

    if (button.field) {
      const valueItem = arr.find(item => item.field === button.field)
      const element = quiz.groups
          .map(group => group.find(el => el.value === valueItem.value))
          .filter(Boolean)
          .shift()

      history.push(`/quiz/${quizType}/${element.goto}`)
    } else {
      history.push(`/quiz/${quizType}/${button.goto}`)
    }
  }

  render() {
    const {
      page: { img },
      quiz,
      isFirst,
      history,
      isLoading
    } = this.props
    const { formData } = this.state
    const firstName = formData[0] && formData[0].find(a => a.field === 'FirstName').value
    return (
      <main>
        <div className={css(styles.border)}>
          {!isFirst && (
            <button className={css(styles.backLink)} onClick={history.goBack}>
              <img className={css(styles.arrowLeft)} alt="previous question" src={arrowleft} />
            </button>
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
              duration="0ms"
              src={img.src}
              alt={img.alt}
            />
            {!isLoading && (
              <Quiz onSubmit={this.onSubmit} firstName={firstName} answer={formData[quiz.id]} quiz={quiz} />
            )}
            {isLoading && <MiniLoader />}
            <PoweredBySkoutLogo className={`${css(styles.skout)} d-lg-block`} />
          </div>
        </div>
      </main>
    )
  }
}

const styles = StyleSheet.create({
  skout: {
    margin: '300px auto 0 auto'
  },
  backLink: {
    width: 90,
    height: 100,
    backgroundColor: 'transparent',
    border: 0,
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
  }
})

QuizPage.propTypes = {
  isLoading: PropTypes.bool,
  isFirst: PropTypes.bool,
  history: PropTypes.object.isRequired,
  quiz: PropTypes.object.isRequired,
  quizType: PropTypes.string.isRequired,
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired
  }).isRequired,
  addAnswer: PropTypes.func.isRequired
}

QuizPage.defaultProps = {
  isLoading: true,
  isFirst: true,
  prevId: -1,
  nextId: -1
}

function mapStateToProps({ quiz, pages, firestore }, { match }) {
  const id = match.params.id ? match.params.id : '0'
  const type = match.params.type ? match.params.type : 'generic'
  // const quiz =
  //   firestore.ordered.quiz && firestore.ordered.quiz.find(q => q.id === id);
  const quizQuestions = quiz[type].find(q => q.id === id)

  return {
    page: pages.find(page => page.name === 'quiz'),
    quiz: quizQuestions,
    isLoading: !isLoaded(quiz),
    firestore,
    quizType: type,
    isFirst: id === '0'
  }
}

export default withRouter(
  compose(
    firestoreConnect([{ collection: 'quiz' }]),
    connect(
      mapStateToProps,
      {
        addAnswer
      }
    )
  )(QuizPage)
)
