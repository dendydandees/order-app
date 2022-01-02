<template>
  <section
    class="h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div
      class="max-w-md w-full space-y-8 rounded-lg shadow-lg border p-6 bg-base-200"
    >
      <div>
        <transition name="fade" mode="out-in">
          <img
            class="mx-auto h-12 w-auto"
            src="https://tailwindui.com/img/logos/workflow-mark.svg"
            alt="Workflow"
          />
        </transition>

        <h2
          class="mt-6 text-center text-3xl font-extrabold text-gray-900 hover:text-secondary"
        >
          Sign in to your account
        </h2>
      </div>

      <ValidationObserver
        ref="loginFormObserver"
        tag="form"
        class="mt-8 space-y-6"
        @submit.stop.prevent="userLogin"
      >
        <!-- Email field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Email Address"
          rules="required|email"
          slim
          tag="div"
          class="form-control"
        >
          <Label for="email" text="Email Address" class="sr-only" />

          <input
            id="email"
            v-model="login.email"
            type="email"
            autocomplete="email"
            placeholder="Email Address"
            class="input input-sm rounded-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Password field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Password"
          rules="required|min:8|max:16"
          slim
          tag="div"
          class="form-control"
        >
          <Label for="password" text="Password" class="sr-only" />

          <div class="relative">
            <input
              id="password"
              v-model="login.password"
              :type="isShowPassword ? '' : 'password'"
              placeholder="Password"
              class="w-full pr-16 input input-sm rounded-sm"
            />

            <button
              type="button"
              class="absolute top-0 right-0 rounded-l-none rounded-sm btn btn-ghost btn-sm"
              @click.stop.prevent="isShowPassword = !isShowPassword"
            >
              <transition name="fade" mode="out-in">
                <template v-if="!isShowPassword">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </template>

                <template v-else>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                </template>
              </transition>
            </button>
          </div>

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <div class="flex items-center justify-end">
          <div class="text-sm">
            <a href="#" class="font-medium link link-secondary">
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="btn btn-primary btn-block"
            :class="[loading ? 'loading' : '']"
            :disabled="loading"
          >
            Sign in
          </button>
        </div>
      </ValidationObserver>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'
import md5 from 'js-md5'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import Label from '~/components/base/Label.vue'
import ErrorText from '~/components/base/ErrorText.vue'

export default {
  name: 'LoginPage',
  components: {
    ValidationObserver,
    ValidationProvider,
    ErrorText,
    Label,
  },
  layout: 'guest',
  data() {
    return {
      loading: false,
      isShowPassword: false,
      login: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    ...mapMutations('appConfig', { setToast: 'SET_TOAST' }),
    async userLogin() {
      try {
        this.loading = true

        const isValid = await this.$refs.loginFormObserver.validate()

        if (!isValid) return

        const encryptPassword = await md5(this.login.password)
        const data = { ...this.login, password: encryptPassword }
        const response = await this.$auth.loginWith('local', {
          data,
        })

        if (!response?.data) throw response

        this.$auth.setUser(response.data.data)
        this.$auth.$storage.setUniversal('user', response.data.data)
        this.$router.push('/')
      } catch (error) {
        const message = error?.response?.data?.message
        this.setToast({
          isShow: true,
          message,
        })
      } finally {
        this.loading = false
      }
    },
  },
}
</script>
