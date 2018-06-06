import { h } from 'hyperapp'
import { location } from "@hyperapp/router"

/**
 * Add your models 
 * Ex. { namespace: model }
 */
const models = {}

let state = {
  location: location.state
}

let actions = {
  location: location.actions,
}

const compose = (models) => {
  Object.keys(models).forEach(namespace => {
    state[namespace] = models[namespace].state
    actions[namespace] = models[namespace].actions
  })
}

compose(models)

export {
  state, actions
}  