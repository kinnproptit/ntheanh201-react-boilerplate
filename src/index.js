import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import loadable from '@loadable/component'

import store from './app/redux'

import { Preloader } from './app/Preloader'

import './index.css'

import { LoadingIndicator } from 'ui'

const AppComponent = loadable(() => import('./app'), {
  fallback: LoadingIndicator
})

ReactDOM.render(
  <Provider store={store}>
    <Preloader>
      <AppComponent />
    </Preloader>
  </Provider>,
  document.getElementById('ntheanh201')
)