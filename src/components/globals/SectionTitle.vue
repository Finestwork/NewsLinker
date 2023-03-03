<template>
  <h2 class="text-slate-800">
    {{ PROPS.plain }}
    <span class="text-indigo-600">{{ PROPS.colored }}</span>
  </h2>
</template>

<script setup>
const PROPS = defineProps({
  plain: {
    type: String,
    required: true
  },
  colored: {
    type: String,
    required: true
  }
});
</script>
