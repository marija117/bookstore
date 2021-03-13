export default {
  user: JSON.parse(localStorage.getItem('user')) || {},
  client: JSON.parse(localStorage.getItem('client')) || {},
  token: localStorage.getItem('token') || '',
  status: null
}
