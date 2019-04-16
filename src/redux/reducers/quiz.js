// import analyticsJSON from '../../settings/quiz/analytics'
// import brokerageJSON from '../../settings/quiz/brokerage'
// import carrierJSON from '../../settings/quiz/carrier'
// import genericJSON from '../../settings/quiz/generic'
// import insuranceJSON from '../../settings/quiz/insurance'
import { ADD_QUIZ } from '../types'

const quiz = (
  //state = { ...analyticsJSON, ...brokerageJSON, ...carrierJSON, ...genericJSON, ...insuranceJSON },
  state = {},
  action
) => {
  switch (action.type) {
    case ADD_QUIZ:
      return action.value
    default:
      return state
  }
}

export default quiz
