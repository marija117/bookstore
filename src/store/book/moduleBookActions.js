import axios from 'axios'

export default {
  fetchBooks ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_API_URL}books`)
        .then((response) => {
          commit('SET_BOOKS', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }
}
