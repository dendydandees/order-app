<template>
  <div class="absolute right-0 bottom-0 mr-6 mb-6 p-2 rounded-lg bg-error">
    <div class="flex items-center justify-between">
      <label class="mr-6">{{ stateOfToast.message }}</label>

      <button class="btn btn-circle btn-ghost btn-xs" @click="doCloseToast">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="inline-block w-4 h-4 stroke-current"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'BaseToast',
  computed: {
    ...mapState('appConfig', { stateOfToast: 'toast' }),
  },
  mounted() {
    setTimeout(() => {
      this.doCloseToast()
    }, 3000)
  },
  methods: {
    ...mapMutations('appConfig', { setToast: 'SET_TOAST' }),
    doCloseToast() {
      this.setToast({
        isShow: false,
        message: '',
      })
    },
  },
}
</script>
