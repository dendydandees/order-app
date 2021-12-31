<template>
  <div class="col-start-3 col-end-5 justify-self-end mt-8 space-x-2">
    <input
      type="button"
      value="Prev"
      class="btn btn-sm btn-outline"
      :disabled="disabled"
      @click="$emit('handlePrev')"
    />

    <input
      type="button"
      value="Next"
      class="btn btn-sm btn-primary"
      @click="$emit('handleNext')"
    />
  </div>
</template>

<script>
export default {
  name: 'SubmitForm',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
