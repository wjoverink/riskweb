import { ADD_ANSWER, ADD_ANSWER_ID } from '../types'

const quizAnswers = (state = [], action) => {
  switch (action.type) {
    case ADD_ANSWER:
      let prod = state[action.value.product]
      if (!prod) {
        prod = { answers: [], id: undefined }
      }
      return {
        ...state,
        [action.value.product]: {
          ...prod,
          ['answers']: {
            ...prod.answers,
            [action.value.question]: action.value.answers
          },
          ['id']: action.value.id
        }
      }
    case ADD_ANSWER_ID:
      return {
        ...state,
        [action.value.product]: {
          ...state[action.value.product],
          ['id']: action.value.id
        }
      }
    default:
      return state
  }
}

export default quizAnswers
