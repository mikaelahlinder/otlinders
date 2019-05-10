import React from 'react'
import { render } from 'react-snapshot'
import App from './App'
import ThankYou from './ThankYou'

const Comp = /thankyou/.test(window.location) ? ThankYou : App

render(<Comp />, document.getElementById('root'))
