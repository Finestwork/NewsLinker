<template>
  <article class='relative'>
      <span class='w-full h-44 flex rounded-xl overflow-hidden'>
        <img class="w-full object-cover" :src='PROPS.headerBg' alt='News Image'/>
      </span>
    <div class='w-full'>
      <h2 class='line-clamp-2 text-slate-800 text-md font-bold font-serif'>
        <a class="hover:underline" :href='PROPS.src' target='_blank'>{{PROPS.headline}}</a>
      </h2>
      <p class='font-medium italic text-sm mt-2 italic serif text-slate-600'>
        By <span class='text-indigo-600'> {{PROPS.author}}</span>
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
  src: {
    type: String,
    required: true
  }
})
</script>
