import { ADD_CAROUSEL } from '../types'

const quiz = (state = [], action) => {
  switch (action.type) {
    case ADD_CAROUSEL:
      return action.value
    default:
      return state
  }
}

export default quiz
