<template>
  <Header />
  <div class="px-4">
    <div class="divide-y divide-dashed divide-slate-400 py-10">
      <div class="mb-20 flex flex-col xl:flex-row">
        <AboutHealth />
        <Opinion />
      </div>

      <TheWorld />
    </div>

    <Footer class="" />
  </div>
</template>

<script setup>
import Header from './Partials/Header.vue';
import AboutHealth from './Partials/AboutHealth.vue';
import Opinion from '@/page/Home/Partials/Opinion.vue';
import TheWorld from '@/page/Home/Partials/TheWorld.vue';
import Footer from '@/components/globals/Footer.vue';
</script>
