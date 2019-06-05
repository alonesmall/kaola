import axios from 'axios'
export default {
  state: {
    searchList: [],
    bannerList: [1, 2, 3],
    kindList: []
  },
  mutations: {
    changeSearchList (state, payload) {
      state.searchList = payload.data
    },
    changeBannerList (state, payload) {
      state.bannerList = payload.data
    },
    changeKindList (state, payload) {
      state.kindList = payload.data
    }
  },
  actions: {
    getSearchList ({ commit }) {
      axios.get('/api/h5/hotKey.html?t=1559543405732')
        .then(res => {
          // console.log(res.data.body.result.keyOutBox)
          commit('changeSearchList', {
            data: res.data.body.result.keyOutBox
          })
        }).catch(err => {
          console.log(err)
        })
    },
    getKindList ({ commit }) {
      axios.get('/home/home/index.html?t=1559545229160&pageNo=1')
        .then(res => {
          // console.log(res.data.data.home)
          commit('changeKindList', {
            data: res.data.data.home[2].itemList
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    getBannerList ({ commit }) {
      axios.get('/home/home/index.html?t=1559545229160&pageNo=1')
        .then(res => {
          commit('changeBannerList', {
            data: res.data.data.home[0].bannerList
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
