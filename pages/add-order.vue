<template>
  <section class="py-10 min-h-86">
    <article class="container mx-auto">
      <NuxtLink to="/" class="link link-secondary no-underline inline-block">
        <span class="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
          Back to home
        </span>
      </NuxtLink>

      <h1 class="mb-8 mt-6">Add Order</h1>

      <ul class="steps steps-horizontal p-0">
        <li
          v-for="(stepItem, index) in stepOptions"
          :key="index"
          class="step"
          :class="[step === index + 1 ? 'step-primary' : '']"
        >
          {{ stepItem }}
        </li>
      </ul>

      <Form :step="step" @doChangeStep="doChangeStep" />
    </article>
  </section>
</template>

<script>
import Form from '~/components/add/Form.vue'

export default {
  name: 'AddOrdersPage',
  components: { Form },
  layout: 'default',
  data() {
    return {
      step: 1,
      stepOptions: ['Consignee Contact', 'Pickup Contact', 'Item Detail'],
    }
  },
  fetch({ $auth }) {
    //  Set user authorization
    const user = $auth.$storage.getCookie('user')
    $auth.setUser(user)
  },
  head() {
    return {
      titleTemplate: `Add Order - %s`,
    }
  },
  methods: {
    doChangeStep(actions) {
      if (
        (this.step <= 1 && actions === 'prev') ||
        (this.step >= 3 && actions === 'next')
      )
        return
      if (actions !== 'prev' && this.step !== 3) return (this.step += 1)

      return (this.step -= 1)
    },
  },
}
</script>
