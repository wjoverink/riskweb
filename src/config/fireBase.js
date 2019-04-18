export const firebase = {
  apiKey: 'AIzaSyDfpuy73hTULR7DCZijiQLuyM5iVqAE6SM',
  authDomain: 'rsurance-web.firebaseapp.com',
  databaseURL: 'https://rsurance-web.firebaseio.com',
  projectId: 'rsurance-web',
  storageBucket: 'rsurance-web.appspot.com',
  messagingSenderId: '965473148228'
}

export const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true, // Store in Firestore instead of Real Time DB
  enableLogging: false
}

export default { firebase, rrfConfig }
