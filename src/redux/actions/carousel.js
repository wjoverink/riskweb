import { ADD_CAROUSEL } from '../types'

export const getCarousel = () => (dispatch, getState, getFirebase) => {
  getFirebase()
      .database()
      .ref('/carousel')
      .once('value')
      .then(function (snapshot) {
        dispatch({
          type: ADD_CAROUSEL,
          value: Object.values(snapshot.val())
        })
      })
}
