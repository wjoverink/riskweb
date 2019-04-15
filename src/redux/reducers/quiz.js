import analyticsJSON from '../../settings/quiz/analytics'
import brokerageJSON from '../../settings/quiz/brokerage'
import carrierJSON from '../../settings/quiz/carrier'
import genericJSON from '../../settings/quiz/generic'
import insuranceJSON from '../../settings/quiz/insurance'

const quiz = (
  state = { ...analyticsJSON, ...brokerageJSON, ...carrierJSON, ...genericJSON, ...insuranceJSON },
  action
) => {
  switch (action.type) {
    default:
      return state
  }
}

export default quiz
