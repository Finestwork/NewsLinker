<template>
  <header
    ref="header"
    class="relative min-h-screen bg-cover bg-center bg-no-repeat p-1 flex flex-col"
    :style="{ 'background-image': `url('${PROPS.headerBg}')` }"
    features=""
  >
    <BlurredNavbar class="z-50" ref="navbar" :nav-links="NAVS" />

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
        class="mt-2 mb-14 rounded-md px-4 py-3 font-semibold backdrop-blur-2xl transition duration-100 hover:backdrop-blur-lg"
        type="button"
      >
        Read More
      </button>
    </div>

    <BlurredCardFeatureList :features="PROPS.features" class="bottom-0 left-0 w-full mt-auto" />
  </header>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import QuoteLeft from '@/components/icons/QuoteLeft.vue';
import BlurredNavbar from '@/components/globals/BlurredNavbar.vue';
import BlurredCardFeatureList from '@/components/globals/BlurredCardFeatureList.vue';

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
  },
  features: {
    type: Array,
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
    if(!navbar.value) return;
    const NAVBAR_HEIGHT = navbar.value.$el.offsetHeight;
    header.value.style.paddingTop = `${NAVBAR_HEIGHT}px`;
  };

  adjustTitleWrapper();
  window.addEventListener('resize', adjustTitleWrapper);
});
</script>
