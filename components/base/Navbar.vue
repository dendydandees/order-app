<template>
  <div class="navbar mb-2 shadow-lg text-black">
    <div class="container mx-auto">
      <div class="flex-1">
        <NuxtLink class="text-lg font-bold no-underline link-secondary" to="/">
          Luwjistik Order
        </NuxtLink>
      </div>

      <div class="flex-none">
        <div class="dropdown dropdown-end">
          <div tabindex="0" class="m-1 btn btn-circle btn-ghost btn-sm">
            <div class="avatar placeholder">
              <div
                class="bg-neutral-focus text-neutral-content rounded-full w-8 h-8"
              >
                <span class="uppercase">{{ initialName }}</span>
              </div>
            </div>
          </div>
          <ul
            tabindex="0"
            class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <button
                class="btn btn-ghost btn-xs justify-start"
                @click="doLogout"
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseNavbar',
  computed: {
    initialName() {
      return this.$auth?.user?.email?.charAt(0)
    },
  },
  methods: {
    async doLogout() {
      try {
        await this.$auth.logout()

        setTimeout(() => {
          this.$auth.setUser({})
          this.$auth.$storage.removeUniversal('user')
          this.$router.push('/login')
        }, 300)
      } catch (error) {
        return error
      }
    },
  },
}
</script>
t
