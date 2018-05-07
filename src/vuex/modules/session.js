const user = {
  info: {
    name: null,
    secondName: null,
    middleName: null,
    lastName: null,
    fullName: null,
    email: null,
    id: null,
    isNew: null,
    providerId: null,
    method: null,
    created: null,
    picture: {
      url: null,
      height: null,
      width: null
    }
  },
  session: {
    accessToken: null,
    refreshToken: null
  }
}

const state = {
  user,
  state: null
}

const getters = {
  user: state => state.user
}

const actions = {}

const mutations = {
  loginRequest (state) {
    state.state = 'loading'
  },
  successLogin (state, user) {
    state.user = user
    state.state = null
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
