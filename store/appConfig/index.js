export const state = () => ({
  toast: {
    isShow: false,
    message: '',
  },
})

export const mutations = {
  SET_TOAST(state, value) {
    state.toast = value
  },
}
