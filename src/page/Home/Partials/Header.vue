<template>
  <header
    ref="header"
    class="h-screen bg-cover bg-center bg-no-repeat p-1"
    :style="{ 'background-image': `url('${PROPS.headerBg}')` }"
  >
    <BlurredNavbar ref="navbar" :nav-links="NAVS" />

    <div
      ref="titleWrapper"
      class="relative mx-auto mt-16 max-w-screen-2xl pl-10 pr-4 font-serif text-white"
    >
      <span class="absolute left-0 -top-3 flex h-8 w-8">
        <QuoteLeft class="block h-full w-full fill-white" />
      </span>
      <h2 class="mb-1 text-2xl font-bold lg:text-4xl xl:text-6xl">
        {{ PROPS.headline }}
      </h2>
      <p class="text-base font-semibold">{{ PROPS.printHeadline }}</p>
      <button
        class="mt-8 rounded-md px-6 py-2 font-semibold backdrop-blur-2xl transition duration-100 hover:backdrop-blur-lg"
        type="button"
      >
        Read More
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import QuoteLeft from '@/components/icons/QuoteLeft.vue';
import BlurredNavbar from '@/components/globals/BlurredNavbar.vue';

const PROPS = defineProps({
  headerBg: {
    type: String,
    required: true
  },
  headline: {
    type: String,
    required: true
  },
  printHeadline: {
    type: String,
    required: true
  }
});

const NAVS = ref([
  'Latest',
  'World',
  'Politics',
  'Health',
  'Tech',
  'Style',
  'Food',
  'Arts',
  'Sports',
  'Science',
  'Travel'
]);
const header = ref(null);
const navbar = ref(null);

nextTick(() => {
  const adjustTitleWrapper = () => {
    const NAVBAR_HEIGHT = navbar.value.$el.offsetHeight;
    header.value.style.paddingTop = `${NAVBAR_HEIGHT}px`;
  };

  adjustTitleWrapper();
  window.addEventListener('resize', adjustTitleWrapper);
});
</script>
