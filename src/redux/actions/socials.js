import { ADD_SOCIALS } from '../types'

export const getSocials = () => (dispatch, getState, getFirebase) => {
  getFirebase()
      .database()
      .ref('/socials')
      .once('value')
      .then(function (snapshot) {
        dispatch({
          type: ADD_SOCIALS,
          value: Object.values(snapshot.val())
        })
      })
}
