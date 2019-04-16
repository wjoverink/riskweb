import { ADD_ANSWER, ADD_ANSWER_ID } from '../types'
import { flatMap } from 'lodash'

export const addAnswer = (answers, question, product) => (dispatch, getState, getFirebase) => {
  var answer = getState().quizAnswers[product]
  dispatch({
    type: ADD_ANSWER,
    value: {
      product,
      answers,
      question
    }
  })
  const firestore = getFirebase().firestore()

  if (!answer || !answer.id) {
    firestore
        .collection('answers')
        .add({
          ...answers.reduce(function (result, value) {
            result[value.field] = value.value
            return result
          }, {}),
          AddDate: Date(),
          Product: product
        })
        .then(function (docRef) {
          dispatch({ type: ADD_ANSWER_ID, value: { product, id: docRef.id } })
        })
  } else {
    firestore
        .collection('answers')
        .doc(answer.id)
        .update({
          ...flatMap(getState().quizAnswers[product]['answers']).reduce(function (result, value) {
            result[value.field] = value.value
            return result
          }, {})
        })
  }
}
