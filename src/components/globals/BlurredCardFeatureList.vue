<template>
  <Splide :options="splideOptions">
    <SplideSlide class="mr-10" v-for="feature in PROPS.features" :key="feature">
      <section class="h-full w-60 overflow-hidden rounded-lg p-2 backdrop-blur-2xl lg:w-80">
        <span class="flex overflow-hidden rounded-lg">
          <img :src="feature.img" alt="Feature card picture" />
        </span>
        <h3 class="mt-2 text-sm font-bold text-white">{{ feature.subSectionName }}</h3>
        <span class="base font-serif font-medium text-white underline line-clamp-2">
          <a :href="feature.src" target="_blank">{{ feature.headline }}</a>
        </span>
      </section>
    </SplideSlide>
  </Splide>
</template>

<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
const PROPS = defineProps({
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
