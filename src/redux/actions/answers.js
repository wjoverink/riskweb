import { ADD_ANSWER } from '../types'
import { flatMap } from 'lodash'

export const addAnswer = (answers, question, product) => (dispatch, getState, getFirebase) => {
  var answer = getState().quizAnswers[product]
  let id = answer && answer.id
  const firebase = getFirebase()
  if (!id) {
    var newPostKey = firebase
        .database()
        .ref()
        .child('answers')
        .push().key
    id = newPostKey
  }
  dispatch({
    type: ADD_ANSWER,
    value: {
      product,
      answers,
      question,
      id
    }
  })
  const result = {
    ...flatMap(answers).reduce(function (result, value) {
      result[value.field] = value.value
      return result
    }, {}),
    lastUpdate: Date.now()
  }
  firebase
      .database()
      .ref('answers/' + id)
      .update(result)
}
