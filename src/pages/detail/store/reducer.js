import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
  title: '衡水中学衡水中学衡水中学衡水中学衡水中学衡水中学',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_DETAIL:
      return state.merge({
        title: action.title,
        content: action.content
      })
    default:
      return state
  }
}