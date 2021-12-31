<template>
  <main class="prose prose-sm max-w-none">
    <Navbar />

    <Nuxt />

    <Footer />

    <client-only>
      <transition name="slide-fade" mode="out-in">
        <Toast v-if="stateOfToast.isShow" />
      </transition>
    </client-only>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import Footer from '~/components/base/Footer.vue'
import Navbar from '~/components/base/Navbar.vue'
import Toast from '~/components/base/Toast.vue'

export default {
  name: 'LayoutDefault',
  components: { Footer, Navbar, Toast },
  middleware: 'auth',
  computed: {
    ...mapState('appConfig', { stateOfToast: 'toast' }),
  },
}
</script>

<style>
/* Slide Fade Transition */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

/* Fade Transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
