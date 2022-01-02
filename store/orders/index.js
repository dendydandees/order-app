export const state = () => ({
  loading: false,
  orders: [],
  params: {
    search: '',
    sortBy: '',
  },
})

export const getters = {
  gettersListOrders: (state) => {
    const search = state.params.search.toLowerCase()
    const sortBy = state.params.sortBy
    let orders = [...state.orders]

    // If not search and sort
    if (!search && !sortBy) return orders || []

    // Filter by search
    if (search) {
      orders = orders.filter((order) =>
        order.consignee_name.toLowerCase().includes(search)
      )
    }

    // Filter by sort by
    if (sortBy) {
      // Sorting value of number
      if (
        sortBy === 'length' ||
        sortBy === 'width' ||
        sortBy === 'height' ||
        sortBy === 'weight'
      ) {
        orders = orders.sort((a, b) => a[sortBy] - b[sortBy])
      }

      // Sorting value of string
      if (
        sortBy === 'consignee_name' ||
        sortBy === 'consignee_city' ||
        sortBy === 'pickup_contact_name' ||
        sortBy === 'pickup_city' ||
        sortBy === 'payment_type'
      ) {
        orders = orders.sort((a, b) => {
          const valueA = a[sortBy].toUpperCase()
          const valueB = b[sortBy].toUpperCase()

          if (valueA < valueB) {
            return -1
          }

          if (valueA > valueB) {
            return 1
          }

          // names must be equal
          return 0
        })
      }
    }

    return orders
  },
}

export const mutations = {
  SET_LOADING(state, value) {
    state.loading = value
  },
  SET_ORDERS(state, value) {
    state.orders = value
  },
  SET_PARAMS_SEARCH(state, value) {
    state.params.search = value
  },
  SET_PARAMS_SORT_BY(state, value) {
    state.params.sortBy = value
  },
}

export const actions = {
  async getOrdersData({ commit }, payload = null) {
    try {
      commit('SET_LOADING', true)

      const response = await this.$axios.$get('/order')

      if (!response?.data) throw response

      const data = response?.data

      commit('SET_ORDERS', data)

      return response
    } catch (error) {
      return error
    } finally {
      commit('SET_LOADING', false)
    }
  },
  async addOrders({ commit }, { data }) {
    try {
      commit('SET_LOADING', true)

      if (!data) throw new Error('Input data first!')

      const response = await this.$axios.$post('/order', data)

      if (!response.data) throw response

      return response
    } catch (error) {
      return error
    } finally {
      commit('SET_LOADING', false)
    }
  },
}
