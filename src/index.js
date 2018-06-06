import './index.scss'
import { h, app } from 'hyperapp'
import { Link, Route, location } from "@hyperapp/router"
import { state, actions } from './models/index'
import bootConnect from './utils/bootConnect'

import Home from './routes/Home'

const view = (state, actions) => {
  const connect = bootConnect(state, actions)
  return (
    <div class="wrapper">
      <Route path="/" render={connect(Home, 'counter')} />
    </div>
  )
}


const main = app(state, actions, view, document.body)

const unsubscribe = location.subscribe(main.location)