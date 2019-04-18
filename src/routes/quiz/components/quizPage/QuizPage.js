import { css, StyleSheet } from 'aphrodite/no-important'
import React, { Component } from 'react'
import { addAnswer } from '../../../../redux/actions/answers'
import arrowleft from '../../../../images/arrow-left.png'
import { compose } from 'redux'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import { getQuiz } from '../../../../redux/actions/quiz'
import ImageLoader from '../../../../library/components/PreloadImage'
import PoweredBySkoutLogo from '../../../../library/components/logos/PoweredBySkoutLogo'
import PropTypes from 'prop-types'
import Quiz from '../Quiz/Quiz'
import { withRouter } from 'react-router-dom'

class QuizPage extends Component {
  constructor(props) {
    super(props)

    document.title = this.props.page.title
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    if (!this.props.quiz) {
      this.props.getQuiz()
    }
  }

  onSubmit(ev) {
    const { history, quizType, quiz } = this.props

    const data = new FormData(ev.target)

    var arr = Array.from(data.entries()).map(item => ({ field: item[0], value: item[1] }))
    this.props.addAnswer(arr, quiz.id, quizType)

    const button = quiz.buttons[0]
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
      answer,
      isFirst,
      history,
      firstName
    } = this.props

    return (
      <main>
        <div className={css(styles.border)}>
          {!isFirst && (
            <button className={css(styles.backLink)} onClick={history.goBack}>
              <img className={css(styles.arrowLeft)} alt="previous question" src={arrowleft} />
            </button>
          )}

          <div className={css(styles.mainInfo, styles.popular)}>
            <ImageLoader
              className={css(styles.img)}
              style={{
                backgroundColor: img.color
              }}
              size={img.size}
              duration="0ms"
              img={quiz ? img.src : undefined}
              alt={img.alt}
            />
            <Quiz onSubmit={this.onSubmit} firstName={firstName} answer={answer} quiz={quiz} />
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
  img: {
    position: 'relative',
    marginBottom: 36,
    margin: '0 auto 10px auto',
    display: 'block'
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
  addAnswer: PropTypes.func.isRequired,
  answer: PropTypes.object,
  firstName: PropTypes.string,
  history: PropTypes.object.isRequired,
  getQuiz: PropTypes.func.isRequired,
  isFirst: PropTypes.bool,
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    img: PropTypes.object.isRequired
  }).isRequired,
  quiz: PropTypes.object,
  quizType: PropTypes.string.isRequired
}

QuizPage.defaultProps = {
  answer: undefined,
  firstName: 'John Doe',
  isFirst: true,
  nextId: -1,
  prevId: -1,
  quiz: undefined
}

const mapStateToProps = createSelector(
  function ({ quiz, pages, quizAnswers }, { match }) {
    return {
      quiz,
      page: pages.quiz,
      quizAnswers,
      id: match.params.id ? match.params.id : '0',
      type: match.params.type ? match.params.type : 'generic'
    }
  },
  function ({ quiz, page, quizAnswers, id, type }) {
    const quizQuestions = quiz && quiz[type] && quiz[type].find(q => q.id === id)
    let answer, firstName
    if (quizAnswers[type]) {
      answer = quizAnswers[type].answers[id]
      firstName = quizAnswers[type].answers[0] && quizAnswers[type].answers[0].find(a => a.field === 'FirstName').value
    }

    return {
      page,
      quiz: quizQuestions,
      quizType: type,
      isFirst: id === '0',
      answer,
      firstName
    }
  }
)

export default withRouter(
  compose(
    connect(
      mapStateToProps,
      {
        getQuiz,
        addAnswer
      }
    )
  )(QuizPage)
)
