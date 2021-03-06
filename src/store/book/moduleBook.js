import state from './moduleBookState.js'
import mutations from './moduleBookMutations.js'
import actions from './moduleBookActions.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions
}