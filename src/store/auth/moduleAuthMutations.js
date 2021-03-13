import app from '../../main'

export default {
  loadingMutation(state) {
    state.status = 'loading'
  },

  loadingSuccessMutation(state, { token, user, client = {} }) {
    state.status = 'success'
    state.token = token
    state.user = user
    state.client = client
  },

  registerWizardSuccessMutation(state, { user, client }) {
    state.status = 'success'
    state.user = user
    state.client = client
  },

  loadingFailureMutation(state) {
    state.status = 'failure'
    state.token = ''
    state.user = {}
  },

  logoutMutation(state) {
    state.user = {},
    state.client = {},
    state.token = '',
    state.status = null
  },

  changeLang (state, payload) {
    app.$i18n.locale = payload
    localStorage.setItem('currentLanguage', payload)
  }
}
