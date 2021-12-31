<template>
  <div class="grid grid-cols-12 gap-4 bg-gray-100 p-2 rounded-lg">
    <div class="form-control col-start-1 col-end-7">
      <label class="label sr-only">
        <span class="label-text">Search</span>
      </label>

      <div class="relative">
        <input
          id="search"
          v-model="search"
          type="search"
          placeholder="Search by consignee name"
          class="w-full pr-16 input input-bordered input-sm bg-white"
        />

        <button class="absolute top-0 right-0 btn btn-ghost btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>

    <div class="form-control col-start-10 col-end-12">
      <select
        v-model="sortBy"
        class="select select-bordered select-sm w-full max-w-xs"
      >
        <template v-for="(option, index) in options">
          <option :key="index" :value="option.value">
            {{ option.title }}
          </option>
        </template>
      </select>
    </div>

    <div class="col-start-12 col-end-13">
      <NuxtLink
        class="btn btn-primary btn-sm btn-block no-underline"
        to="/add-order"
      >
        Add
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'IndexTableFilter',
  data() {
    return {
      options: [
        { title: 'Sort by all', value: '' },
        { title: 'Consignee Name', value: 'consignee_name' },
        { title: 'Consignee City', value: 'consignee_city' },
        { title: 'Pickup Name', value: 'pickup_contact_name' },
        { title: 'Pickup City', value: 'pickup_city' },
        { title: 'Length', value: 'length' },
        { title: 'Width', value: 'width' },
        { title: 'Height', value: 'height' },
        { title: 'Weight', value: 'weight' },
        { title: 'Payment Type', value: 'payment_type' },
      ],
    }
  },
  computed: {
    ...mapState('orders', { stateOfParams: 'params' }),
    search: {
      get() {
        return this.stateOfParams.search
      },
      set(value) {
        setTimeout(() => {
          this.setParamsSearch(value)
        }, 300)
      },
    },
    sortBy: {
      get() {
        return this.stateOfParams.sortBy
      },
      set(value) {
        setTimeout(() => {
          this.setParamsSortBy(value)
        }, 300)
      },
    },
  },
  methods: {
    ...mapMutations('orders', {
      setParamsSearch: 'SET_PARAMS_SEARCH',
      setParamsSortBy: 'SET_PARAMS_SORT_BY',
    }),
  },
}
</script>
