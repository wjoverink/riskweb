import { ADD_SOCIALS } from '../types'

const quiz = (state = {}, action) => {
  switch (action.type) {
    case ADD_SOCIALS:
      return action.value
    default:
      return state
  }
}

export default quiz
