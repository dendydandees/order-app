<template>
  <section>
    <!-- Form step 1 -->
    <ValidationObserver
      v-show="step === 1"
      ref="observer1"
      tag="form"
      class="py-6"
      @submit.stop.prevent="doSubmit"
    >
      <div class="grid grid-cols-12 gap-4">
        <!-- Consignee name field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Consignee Name"
          rules="required"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label
            for="consignee_name"
            :is-required="true"
            text="Consignee Name"
          />

          <input
            id="consignee_name"
            v-model="form1.consignee_name"
            type="text"
            placeholder="Enter consignee name..."
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Consignee email field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="E-mail"
          rules="email"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label for="consignee_email" text="Consignee Email" />

          <input
            id="consignee_email"
            v-model="form1.consignee_email"
            type="email"
            placeholder="Enter consignee email..."
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Consignee number field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Consignee Number"
          rules="required|min:10|max:13"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label
            for="consignee_number"
            :is-required="true"
            text="Consignee Number"
          />

          <input
            id="consignee_number"
            v-model="form1.consignee_number"
            type="number"
            placeholder="Enter consignee number..."
            min="0"
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Consignee address field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Consignee Address"
          rules="required"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label
            for="consignee_address"
            :is-required="true"
            text="Consignee Address"
          />

          <textarea
            id="consignee_address"
            v-model="form1.consignee_address"
            class="textarea h-24 textarea-bordered"
            placeholder="Enter consignee address..."
          ></textarea>

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Consignee postal field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Consignee Postal"
          rules="required|numeric"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label
            for="consignee_postal"
            :is-required="true"
            text="Consignee Postal"
          />

          <input
            id="consignee_postal"
            v-model="form1.consignee_postal"
            type="number"
            placeholder="Enter consignee postal..."
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Consignee country field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Consignee Country"
          rules="required"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label
            for="consignee_country"
            :is-required="true"
            text="Consignee Country"
          />

          <input
            id="consignee_country"
            v-model="form1.consignee_country"
            type="text"
            placeholder="Enter consignee country..."
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Consignee province field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Consignee Province"
          rules="required"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label
            for="consignee_province"
            :is-required="true"
            text="Consignee Province"
          />

          <input
            id="consignee_province"
            v-model="form1.consignee_province"
            type="text"
            placeholder="Enter consignee province..."
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Consignee city field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Consignee City"
          rules="required"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label
            for="consignee_city"
            :is-required="true"
            text="Consignee City"
          />

          <input
            id="consignee_city"
            v-model="form1.consignee_city"
            type="text"
            placeholder="Enter consignee city..."
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <Submit
          :disabled="step === 1 ? true : false"
          @handlePrev="doSubmit({ actions: 'prev', form: '1' })"
          @handleNext="doSubmit({ actions: 'next', form: '1' })"
        />
      </div>
    </ValidationObserver>

    <!-- Form step 2 -->
    <ValidationObserver
      v-show="step === 2"
      ref="observer2"
      tag="form"
      class="py-6"
      @submit.stop.prevent="doSubmit"
    >
      <div class="grid grid-cols-12 gap-4">
        <!-- Pickup name field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Pickup Name"
          rules="required"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label
            for="pickup_contact_name"
            :is-required="true"
            text="Pickup Name"
          />

          <input
            id="pickup_contact_name"
            v-model="form2.pickup_contact_name"
            type="text"
            placeholder="Enter pickup name..."
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Pickup number field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Pickup Number"
          rules="required|min:10|max:13"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label
            for="pickup_contact_number"
            :is-required="true"
            text="Pickup Number"
          />

          <input
            id="pickup_contact_number"
            v-model="form2.pickup_contact_number"
            type="number"
            placeholder="Enter pickup number..."
            min="0"
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Pickup address field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Pickup Address"
          rules="required"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label
            for="pickup_address"
            :is-required="true"
            text="Pickup Address"
          />

          <textarea
            id="pickup_address"
            v-model="form2.pickup_address"
            class="textarea h-24 textarea-bordered"
            placeholder="Enter pickup address..."
          ></textarea>

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Pickup postal field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Pickup Postal"
          rules="required|numeric"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label for="pickup_postal" :is-required="true" text="Pickup Postal" />

          <input
            id="pickup_postal"
            v-model="form2.pickup_postal"
            type="number"
            placeholder="Enter pickup postal..."
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Pickup country field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Pickup Country"
          rules="required"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label
            for="pickup_country"
            :is-required="true"
            text="Pickup Country"
          />

          <input
            id="pickup_country"
            v-model="form2.pickup_country"
            type="text"
            placeholder="Enter pickup country..."
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Pickup province field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Pickup Province"
          rules="required"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label
            for="pickup_province"
            :is-required="true"
            text="Pickup Province"
          />

          <input
            id="pickup_province"
            v-model="form2.pickup_province"
            type="text"
            placeholder="Enter pickup province..."
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Pickup city field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Pickup City"
          rules="required"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label for="pickup_city" :is-required="true" text="Pickup City" />

          <input
            id="pickup_city"
            v-model="form2.pickup_city"
            type="text"
            placeholder="Enter pickup city..."
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <Submit
          @handlePrev="doSubmit({ actions: 'prev', form: '2' })"
          @handleNext="doSubmit({ actions: 'next', form: '2' })"
        />
      </div>
    </ValidationObserver>

    <!-- Form step 3 -->
    <ValidationObserver
      v-show="step === 3"
      ref="observer3"
      tag="form"
      class="py-6"
      @submit.stop.prevent="doSubmit"
    >
      <div class="grid grid-cols-12 gap-4">
        <!-- item payment field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Payment Type"
          rules="required"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label for="payment_type" :is-required="true" text="Payment Type" />

          <select
            v-model="form3.payment_type"
            class="select select-bordered select-sm w-full"
          >
            <option disabled="disabled" selected="selected" value="">
              Choose payment type
            </option>
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="Paylater">Paylater</option>
          </select>

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Item length field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Item Length"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label for="length" text="Item Length" />

          <input
            id="length"
            v-model="form3.length"
            type="number"
            placeholder="Enter item length..."
            min="0"
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Item width field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Item Width"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label for="width" text="Item Width" />

          <input
            id="width"
            v-model="form3.width"
            type="number"
            placeholder="Enter item width..."
            min="0"
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Item height field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Item Height"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label for="height" text="Item Height" />

          <input
            id="height"
            v-model="form3.height"
            type="decimal:2"
            placeholder="Enter item height..."
            min="0"
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <!-- Item weight field -->
        <ValidationProvider
          v-slot="{ errors }"
          name="Item Weight"
          slim
          tag="div"
          class="form-control col-start-1 col-end-5"
        >
          <Label for="weight" text="Item Weight" />

          <input
            id="weight"
            v-model="form3.weight"
            type="number"
            placeholder="Enter item weight..."
            min="0"
            class="input input-bordered input-sm"
          />

          <ErrorText :message="errors[0]" />
        </ValidationProvider>

        <Submit
          @handlePrev="doSubmit({ actions: 'prev', form: '3' })"
          @handleNext="doSubmit({ actions: 'next', form: '3' })"
        />
      </div>
    </ValidationObserver>
  </section>
</template>

<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import ErrorText from '../base/ErrorText.vue'
import Label from '../base/Label.vue'
import Submit from './Submit.vue'

export default {
  name: 'AddForm',
  components: {
    ValidationObserver,
    ValidationProvider,
    ErrorText,
    Label,
    Submit,
  },
  props: {
    step: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      form1: {
        consignee_name: 'Cak Bagus',
        consignee_email: 'cakbagus@yopmail.com',
        consignee_number: '0896728173361',
        consignee_address: 'Jl. Sumatra',
        consignee_postal: '68133',
        consignee_country: 'Indonesia',
        consignee_province: 'Jawa Barat',
        consignee_city: 'Bandung',
        consignee_state: '',
      },
      form2: {
        pickup_contact_name: 'Ucok Pikun',
        pickup_contact_number: '0892718471126',
        pickup_address: 'Jl. Kalimantan',
        pickup_postal: '68134',
        pickup_country: 'Indonesia',
        pickup_province: 'Sulawesi Selatan',
        pickup_city: 'Makassar',
        pickup_state: '',
      },
      form3: {
        payment_type: 'Paylater',
        length: 3,
        width: 0.8,
        height: 0.3,
        weight: 6,
      },
    }
  },
  methods: {
    async doSubmit({ actions, form }) {
      // Handle action prev
      if (actions !== 'next') {
        return this.$emit('doChangeStep', actions)
      }

      // Handle validation form
      const refs = `observer${form}`
      const isValid = await this.$refs[refs].validate()

      if (!isValid) return

      // Handle form step 1
      if (this.step === 1) {
        this.form1 = {
          ...this.form1,
          consignee_state: this.form1.consignee_country,
        }

        return this.$emit('doChangeStep', actions)
      }

      // Handle form step 2
      if (this.step === 2) {
        this.form2 = {
          ...this.form2,
          pickup_state: this.form2.pickup_country,
        }

        return this.$emit('doChangeStep', actions)
      }

      // Handle form step 3
      if (this.step === 3) {
        const data = { ...this.form1, ...this.form2, ...this.form3 }

        try {
          return await console.log(data)
        } catch (error) {
          return error
        }
      }
    },
  },
}
</script>
