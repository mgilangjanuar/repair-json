import React from 'react'
import ReactDOM from 'react-dom'
import { register } from 'register-service-worker'
import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals()
register('/service-worker.js', {
  registrationOptions: { scope: './' },
  ready(_registration) {
    console.log('Service worker is active.')
  },
  registered(_registration) {
    console.log('Service worker has been registered.')
  },
  cached(_registration) {
    console.log('Content has been cached for offline use.')
  },
  updatefound(_registration) {
    console.log('New content is downloading.')
  },
  updated(_registration) {
    console.log('New content is available; please refresh.')
  },
  offline() {
    console.log('No internet connection found. App is running in offline mode.')
  },
  error(error) {
    console.error('Error during service worker registration:', error)
  }
})