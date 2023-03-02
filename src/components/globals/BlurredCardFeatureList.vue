<template>
  <Splide :options="splideOptions">
    <SplideSlide class="mr-10" v-for="feature in features" :key="feature">
      <section class="w-80 overflow-hidden rounded-lg p-2 backdrop-blur-2xl">
        <span class="flex overflow-hidden rounded-lg">
          <img :src="feature.imgSrc" alt="Feature card picture" />
        </span>
        <h3 class="text-sm font-bold text-white">{{ feature.subSectionName }}</h3>
        <span class="base line-clamp-2 font-serif font-medium text-white">
          {{ feature.title }}</span
        >
      </section>
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
defineProps({
  features: {
    type: Array,
    required: true
  }
});

const splideOptions = {
  arrows: false,
  live: false,
  pagination: false
};
</script>

<style scoped>
:deep(.splide__list) {
  list-style: none;
  display: flex;
}
</style>
