export default {
  isLoggedIn: state => state.status === 'success',
  user: state => state.user,
  client: state => state.client,
  token: state => state.token,
  status: state => state.status
}
