<template>
  <div
    style="z-index: 999"
    class="fixed top-0 left-0 flex h-screen w-full flex-col items-center justify-center bg-white"
  >
    <span class="flex" ref="animation"></span>

    <p class="mb-4 w-11/12 text-justify text-sm font-medium text-slate-700 sm:w-3/4 sm:text-base">
      We're preparing everything for you, so please wait a few seconds while the app loads. Since
      it's utilizing a free API from NYTimes, the loading time may be slightly longer. We appreciate
      your patience and understanding.
    </p>

    <span
      class="absolute bottom-4 w-11/12 text-center text-sm font-semibold text-slate-700 sm:w-3/4"
    >
      Special thanks to
      <a
        href="https://lottiefiles.com/99297-loading-files"
        target="_blank"
        class="mx-1 text-indigo-600 underline hover:text-indigo-500"
      >
        lottie files
      </a>
      for this wonderful loader.
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import lottie from 'lottie-web';
import news from '@/lottie-animation/news.json';

const animation = ref(null);

onMounted(() => {
  lottie.loadAnimation({
    container: animation.value,
    animationData: news,
    renderer: 'svg',
    loop: true,
    autoplay: true
  });
});
</script>
