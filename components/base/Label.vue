<template>
  <label class="label" :for="$attrs.for">
    <span class="label-text">
      {{ $attrs.text }}
      <b v-if="isRequired" class="text-error">*</b>
    </span>
  </label>
</template>

<script>
export default {
  name: 'FormLabel',
  props: {
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
