import 'firebase/functions' // <- needed if using httpsCallable
import 'firebase/database' // <- needed if using database
import { applyMiddleware, compose, createStore } from 'redux'
import { firebase as fbConfig, rrfConfig } from '../config/fireBase'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase/app'
import rootReducer from '../redux/reducers'
import thunk from 'redux-thunk'

export default function configureStore() {
  // Initialize Firebase instance
  firebase.initializeApp(fbConfig)
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const createStoreWithFirebase = composeEnhancers(
    applyMiddleware(
      thunk.withExtraArgument(getFirebase) // Pass getFirebase function as extra argument
    ),
    reactReduxFirebase(firebase, rrfConfig) // firebase instance as first argument
  )(createStore)

  const store = createStoreWithFirebase(rootReducer)

  return store
}
