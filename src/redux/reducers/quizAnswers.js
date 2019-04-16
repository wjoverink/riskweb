import { ADD_ANSWER } from '../types'

const quizAnswers = (state = [], action) => {
  switch (action.type) {
    case ADD_ANSWER:
      return state.concat([action.value])
    default:
      return state
  }
}

export default quizAnswers
