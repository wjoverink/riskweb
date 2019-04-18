import { ADD_PAGES } from '../types'
import pagesJSON from '../../settings/pages'

export const getPages = () => dispatch => {
  // getFirebase()
  //     .database()
  //     .ref('/questions')
  //     .once('value')
  //     .then(function (snapshot) {
  dispatch({
    type: ADD_PAGES,
    value: pagesJSON.pages
  })
  // })
}
