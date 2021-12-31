<template>
  <section class="py-10 min-h-86">
    <article class="container mx-auto">
      <h1 class="mb-8">Order Details</h1>

      <TableFilter />

      <div class="overflow-x-auto">
        <table class="table w-full">
          <TableHeading />

          <TableBody />
        </table>
      </div>
    </article>
  </section>
</template>

<script>
import TableHeading from '~/components/index/TableHeading.vue'
import TableBody from '~/components/index/TableBody.vue'
import TableFilter from '~/components/index/TableFilter.vue'

export default {
  name: 'IndexPage',
  components: { TableHeading, TableBody, TableFilter },
  layout: 'default',
  async fetch({ $auth, store }) {
    //  Set user authorization
    const user = $auth.$storage.getCookie('user')

    $auth.setUser(user)

    /* Fetch orders
     * If fetch is fail throw the error message and show toast
     */
    try {
      const response = await store.dispatch('orders/getOrdersData', {})

      if (!response?.data) throw response
    } catch (error) {
      const message = error?.response?.data?.message

      store.commit('appConfig/SET_TOAST', {
        isShow: true,
        message,
      })
    }
  },
  head() {
    return {
      titleTemplate: `Dashboard - %s`,
    }
  },
  activated() {
    // Call fetch again if last fetch more than 30 sec ago
    if (this.$fetchState.timestamp <= Date.now() - 30000) {
      this.$fetch()
    }
  },
}
</script>
