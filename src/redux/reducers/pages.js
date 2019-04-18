import { ADD_PAGES } from '../types'

const pages = (state = [], action) => {
  switch (action.type) {
    case ADD_PAGES:
      return action.value
    default:
      return state
  }
}

export default pages
