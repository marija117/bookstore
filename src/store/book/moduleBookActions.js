import axios from 'axios'

export default {
  fetchBooks ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/books')
        .then((response) => {
          commit('SET_BOOKS', response.data.books)
          resolve(response)
        })
        .catch((error) => { reject(error) })
    })
  }
}
