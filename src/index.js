import '@babel/polyfill'
import './index.css'
import * as serviceWorker from './serviceWorker'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import configureStore from './store/configureStore'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import ScrollToTop from './library/components/ScrollToTop/ScrollToTop'

const initialState = window.__INITIAL_STATE__ || {
  firebase: { authError: null }
}
const store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
