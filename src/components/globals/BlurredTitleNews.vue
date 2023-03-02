<template>
  <article class='relative rounded-xl overflow-hidden'>
      <span class='w-full h-72 flex'>
        <img class="w-full object-cover" :src='PROPS.headerBg' alt='News Image'/>
      </span>
    <div class='px-2 py-4 absolute backdrop-blur-md bottom-0 left-0 w-full text-white'>
      <h2 class='line-clamp-2 text-lg font-semibold font-serif'>
        <a class="hover:underline" :href='PROPS.src' target='_blank'>{{PROPS.headline}}</a>
      </h2>
      <p class='font-medium italic text-sm mt-2'>
        <span>{{PROPS.author}}</span>
        •
        <span>{{PROPS.publishedDate.toLocaleDateString('en', {dateStyle: 'long'})}}</span>
      </p>
    </div>
  </article>
</template>

<script setup>
const PROPS = defineProps({
  headerBg: {
    type: String,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publishedDate: {
    type: Date,
    required: true
  },
  src:{
    type: String,
    required: true
  }
})
</script>
