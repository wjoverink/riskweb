import { ADD_ANSWER } from '../types'

export const addAnswer = answer => (dispatch, getState, getFirebase) => {
  // const firebase = getFirebase().firestore()
  // const firstName = answer.find(a => a.field === 'FirstName')
  // const lastName = answer.find(a => a.field === 'LastName')
  // const email = answer.find(a => a.field === 'Email')
  // const value = {
  //   FirstName: firstName ? firstName.value : '',
  //   LastName: lastName ? lastName.value : '',
  //   Email: email ? email.value : '',
  //   Quiz: answer
  // }
  // firebase.push('answers', value).then(payload => {
  //   dispatch({ type: ADD_ANSWER, value: payload })
  // })
}
