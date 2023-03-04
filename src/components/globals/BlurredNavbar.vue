<template>
  <nav class="fixed top-0 left-0 w-full bg-black/50 py-4 font-sans backdrop-blur-2xl">
    <div class="mx-auto flex flex-col justify-between xl:flex-row">
      <Splide class="order-2 font-semibold text-white xl:order-1" :options="splideOptions">
        <SplideSlide v-for="nav in PROPS.navLinks" :key="nav">
          <router-link class="px-4" :to="{ name: 'Category', params: { id: nav.toLowerCase() } }">{{
            nav
          }}</router-link>
        </SplideSlide>
      </Splide>

      <div class="order-1 ml-4 mb-6 flex w-full items-center xl:order-2 xl:mb-0">
        <span class="mr-3 flex h-4 w-4">
          <MagnifyingGlass class="flex h-full w-full fill-white" />
        </span>
        <input
          class="w-full bg-transparent font-medium text-white outline-none placeholder:text-white/80"
          type="text"
          placeholder="What's happening?"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import MagnifyingGlass from '@/components/icons/MagnifyingGlass.vue';

const PROPS = defineProps({
  navLinks: {
    type: Array,
    required: true
  }
});
const splideOptions = ref({
  arrows: false,
  live: false,
  pagination: false,
  mediaQuery: 'min',
  autoWidth: true,
  breakpoints: {
    900: {
      drag: false
    }
  }
});
</script>

<style scoped>
:deep(.splide__list) {
  display: flex;
  justify-content: space-between;
}

:deep(.splide__splide) {
  flex-shrink: 0;
}
</style>
