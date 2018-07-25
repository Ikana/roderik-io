import React, { Component } from 'react'
import ReactDom from 'react-dom'
import 'antd/dist/antd.css'

import MainScreen from './components/MainScreen'

let callback = null

export default (cb) => {
  callback = cb
}

(window.requestIdleCallback ? Promise.resolve('native') : import('ric')).then(() => {
  class App extends Component {
    componentDidMount () {
      window.requestIdleCallback(() => {
        if (callback) {
          callback()
        }
      })
    }
    render () {
      return <MainScreen />
    }
  }

  ReactDom.render(
    <App />,
    document.getElementById('app')
  )
})
