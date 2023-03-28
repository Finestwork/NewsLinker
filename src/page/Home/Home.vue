<template>
  <PageLoader v-if='!areAllComponentsLoaded' />
  <Header @header-loaded='isHeaderLoaded = true' />

  <div class='px-4' v-if='isHeaderLoaded'>
    <div class='divide-y divide-dashed divide-slate-400 py-10'>
      <div class='mb-20 flex flex-col xl:flex-row'>
        <AboutHealth @health-loaded='isHealthLoaded = true' />
        <Opinion @opinion-loaded='isOpinionLoaded = true' />
      </div>
      <TheWorld @world-loaded='isWorldLoaded = true' />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import Header from './Partials/Header.vue';
import AboutHealth from './Partials/AboutHealth.vue';
import Opinion from '@/page/Home/Partials/Opinion.vue';
import TheWorld from '@/page/Home/Partials/TheWorld.vue';
import Footer from '@/components/globals/Footer.vue';
import PageLoader from '@/components/globals/PageLoader.vue';

const isHeaderLoaded = ref(false);
const isHealthLoaded = ref(false);
const isOpinionLoaded = ref(false);
const isWorldLoaded = ref(false);

const areAllComponentsLoaded = computed(
  () => isHeaderLoaded.value && isHealthLoaded.value && isOpinionLoaded.value && isWorldLoaded.value
);
</script>
