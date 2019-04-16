import { ADD_PRODUCTS } from '../types'

export const getProducts = () => (dispatch, getState, getFirebase) => {
  getFirebase()
      .database()
      .ref('/Products')
      .once('value')
      .then(function (snapshot) {
        dispatch({
          type: ADD_PRODUCTS,
          value: snapshot.val()
        })
      })
}
