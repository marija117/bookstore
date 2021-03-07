import axios from 'axios'

export default {
  fetchGenres ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get(`${process.env.VUE_APP_API_URL}genres`)
        .then((response) => {
          commit('SET_GENRES', response.data)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }
}
