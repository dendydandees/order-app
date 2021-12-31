<template>
  <tbody>
    <template v-for="(order, index) in orders">
      <tr :key="order.order_id" class="hover">
        <th>
          <button
            class="btn btn-square btn-secondary btn-xs"
            @click="doShowDetails(order.order_id)"
          >
            <transition name="fade" mode="out-in">
              <template v-if="isShowDetails !== order.order_id">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </template>

              <template v-else>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 15l7-7 7 7"
                  />
                </svg>
              </template>
            </transition>
          </button>
        </th>
        <th>{{ index + 1 }}</th>
        <td>{{ order.consignee_name }}</td>
        <td>{{ order.consignee_city }}</td>
        <td>{{ order.pickup_contact_name }}</td>
        <td>{{ order.pickup_city }}</td>
        <td>
          {{ order.length ? `${order.length} meters` : '-' }}
        </td>
        <td>
          {{ order.width ? `${order.width} meters` : '-' }}
        </td>
        <td>
          {{ order.height ? `${order.height} meters` : '-' }}
        </td>
        <td>
          {{ order.weight ? `${order.weight} kilograms` : '-' }}
        </td>
        <td>{{ order.payment_type }}</td>
      </tr>

      <transition :key="order.order_id" name="fade" mode="out-in">
        <tr v-if="isShowDetails === order.order_id">
          <td colspan="11" class="bg-gray-100">
            <div class="grid grid-cols-3 gap-4">
              <!-- Consignee details -->
              <section>
                <h2 class="mt-0 mr-4">Consignee Details</h2>

                <article class="space-y-4">
                  <div>
                    <h4 class="mt-0 font-bold">Name</h4>
                    <span>{{ order.consignee_name }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Email</h4>
                    <span>{{ order.consignee_email }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Number</h4>
                    <span>{{ order.consignee_number }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Address</h4>
                    <span>{{ order.consignee_address }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Postal</h4>
                    <span>{{ order.consignee_postal }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">City</h4>
                    <span>{{ order.consignee_city }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Province</h4>
                    <span>{{ order.consignee_province }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Country</h4>
                    <span>{{ order.consignee_country }}</span>
                  </div>
                </article>
              </section>

              <!-- Pickup details -->
              <section>
                <h2 class="mt-0 mr-4">Pickup Details</h2>

                <article class="space-y-4">
                  <div>
                    <h4 class="mt-0 font-bold">Name</h4>
                    <span>{{ order.pickup_contact_name }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Number</h4>
                    <span>{{ order.pickup_contact_number }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Address</h4>
                    <span>{{ order.pickup_address }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Postal</h4>
                    <span>{{ order.pickup_postal }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">City</h4>
                    <span>{{ order.pickup_city }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Province</h4>
                    <span>{{ order.pickup_province }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Country</h4>
                    <span>{{ order.pickup_country }}</span>
                  </div>
                </article>
              </section>

              <!-- Items details -->
              <section>
                <h2 class="mt-0 font-bold">Item Details</h2>

                <article class="space-y-4">
                  <div>
                    <h4 class="mt-0 font-bold">Payment Type</h4>
                    <span>{{ order.payment_type }}</span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Length</h4>
                    <span>
                      {{ order.length ? `${order.length} meters` : '-' }}
                    </span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Width</h4>
                    <span>
                      {{ order.width ? `${order.width} meters` : '-' }}
                    </span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Height</h4>
                    <span>
                      {{ order.height ? `${order.height} meters` : '-' }}
                    </span>
                  </div>

                  <div>
                    <h4 class="mt-0 font-bold">Weight</h4>
                    <span>
                      {{ order.weight ? `${order.weight} kilograms` : '-' }}
                    </span>
                  </div>
                </article>
              </section>
            </div>
          </td>
        </tr>
      </transition>
    </template>
  </tbody>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'IndexTableBody',
  data() {
    return {
      isShowDetails: '',
    }
  },
  computed: {
    ...mapGetters('orders', ['gettersListOrders']),
    orders() {
      return this.gettersListOrders
    },
  },
  methods: {
    doShowDetails(selected) {
      if (this.isShowDetails === selected) return (this.isShowDetails = '')
      return (this.isShowDetails = selected)
    },
  },
}
</script>
