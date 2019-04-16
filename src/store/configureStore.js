import 'firebase/firestore' // make sure you add this for firestore
import 'firebase/functions' // <- needed if using httpsCallable
import 'firebase/firestore' // <- needed if using firestore
import { applyMiddleware, compose, createStore } from 'redux'
import { firebase as fbConfig, rrfConfig } from '../config/fireBase'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import { reduxFirestore } from 'redux-firestore'
import rootReducer from '../redux/reducers'
import thunk from 'redux-thunk'

export default function configureStore() {
  // Initialize Firebase instance
  firebase.initializeApp(fbConfig)

  const createStoreWithFirebase = compose(
    applyMiddleware(
      thunk.withExtraArgument(getFirebase) // Pass getFirebase function as extra argument
    ),
    reactReduxFirebase(firebase, rrfConfig), // firebase instance as first argument
    reduxFirestore(firebase) // <- needed if using firestore
  )(createStore)

  const store = createStoreWithFirebase(rootReducer)

  return store
}
