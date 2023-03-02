<template>
  <h2 class='text-4xl text-slate-800 font-black text-center mb-4'>{{ PROPS.plain}}
    <span class='text-indigo-500'>{{PROPS.colored}}</span>
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
})
</script>
