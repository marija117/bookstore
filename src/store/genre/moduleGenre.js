import state from './moduleGenreState.js'
import mutations from './moduleGenreMutations.js'
import actions from './moduleGenreActions.js'

export default {
  isRegistered: false,
  namespaced: true,
  state,
  mutations,
  actions
}