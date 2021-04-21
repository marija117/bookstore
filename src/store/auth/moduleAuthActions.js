import axios from 'axios'

export default {
  registerAction({ commit }, userDetails) {
    commit('loadingMutation')
    return new Promise((resolve, reject) => {
      axios.post(`${process.env.VUE_APP_API_URL}register`, userDetails)
        .then(response => {
          console.log(response.data)
          console.log(this.userDetails)

          const token = response.headers.authorization
          const user = response.data
          commit('loadingSuccessMutation', { token, user })
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
          axios.defaults.headers.common['Authorization'] = token
          resolve(response)
        })
        .catch(error => {
          commit('loadingFailureMutation')
          localStorage.removeItem('token')
          reject(error)
        })
    })
  },

  loginAction({ commit }, userCredentials) {
    commit('loadingMutation')
    return new Promise((resolve, reject) => {
      axios.post(`${process.env.VUE_APP_API_URL}login`, userCredentials)
        .then(response => {
          console.log("aaaa");
          const token = response.headers.authorization
          const user = response.data.user
          const client = response.data.client
          commit('loadingSuccessMutation', { token, user, client })
          localStorage.setItem('token', token)
          localStorage.setItem('user', JSON.stringify(user))
          localStorage.setItem('client', JSON.stringify(client))
          axios.defaults.headers.common['Authorization'] = token
          resolve(response)
        })
        .catch(error => {
          commit('loadingFailureMutation')
          localStorage.removeItem('token')
          reject(error)
        })
    })
  },

  logoutAction({ commit }) {
    return new Promise((resolve) => {
      axios.delete(`${process.env.VUE_APP_API_URL}logout`)
        .then(response => {
          commit('logoutMutation')
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          localStorage.removeItem('client')
          localStorage.removeItem('currentLanguage')
          delete axios.defaults.headers.common["Authorization"]
          resolve(response)
        })
    })
  }
}