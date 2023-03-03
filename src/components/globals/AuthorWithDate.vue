<template>
  <p class="font-serif text-sm font-semibold italic text-slate-500">
    By <span class="text-indigo-600">{{ PROPS.author }}</span> •
    {{ PROPS.publishedDate }}
  </p>
</template>

<script setup>
const PROPS = defineProps({
  author: {
    type: String,
    required: true
  },
  publishedDate: {
    type: String,
    required: true
  }
});
</script>
