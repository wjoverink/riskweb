import 'firebase/firestore' // make sure you add this for firestore
import 'firebase/functions' // <- needed if using httpsCallable
import 'firebase/firestore' // <- needed if using firestore
import { compose, createStore } from 'redux'
import { firebase as fbConfig, rrfConfig } from '../settings/config'
import firebase from 'firebase/app'
import { reactReduxFirebase } from 'react-redux-firebase'
import { reduxFirestore } from 'redux-firestore'
import rootReducer from '../redux/reducers'

export default function configureStore() {
  // Initialize Firebase instance
  firebase.initializeApp(fbConfig)

  const createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
  )(createStore)

  const store = createStoreWithFirebase(rootReducer)

  return store
}
