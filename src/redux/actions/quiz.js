import { ADD_QUIZ } from '../types'

export const getQuiz = () => (dispatch, getState, getFirebase) => {
  getFirebase()
      .database()
      .ref('/questions')
      .once('value')
      .then(function (snapshot) {
        dispatch({
          type: ADD_QUIZ,
          value: snapshot.val()
        })
      })
}
