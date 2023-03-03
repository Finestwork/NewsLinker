<template>
  <Header
    :header-bg="HEADER_BG"
    :headline="HEADLINE"
    :print-headline="PRINT_HEADLINE"
    :features="FEATURES"
  />

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
import { ref } from 'vue';
import TimesAPI from '@/helpers/APIs/TimesAPI';
import Header from './Partials/Header.vue';
import AboutHealth from './Partials/AboutHealth.vue';
import Opinion from '@/page/Home/Partials/Opinion.vue';
import TheWorld from '@/page/Home/Partials/TheWorld.vue';
import Footer from '@/components/globals/Footer.vue';

const HEADER_BG = ref('');
const HEADLINE = ref('');
const PRINT_HEADLINE = ref('');
const FEATURES = ref([]);

TimesAPI.getArticles({
  q: 'news',
  fq: 'section_name:("World")'
})
  .then((res) => {
    const NEWS = res.data.response.docs;

    // Main News
    const MAIN_NEWS = NEWS[0];
    HEADER_BG.value = `https://www.nytimes.com/${MAIN_NEWS.multimedia[43].url}`;
    HEADLINE.value = MAIN_NEWS.headline.main;
    PRINT_HEADLINE.value = MAIN_NEWS.abstract;

    // Features
    FEATURES.value = NEWS.filter((news, ind) => ind !== 0).map((news) => {
      {
        return {
          imgSrc: `https://www.nytimes.com/${news.multimedia[43].url}`,
          title: news.headline.main,
          subSectionName: news.section_name,
          url: news.web_url
        };
      }
    });
  })
  .catch((err) => {
    // Redirect to another page
    console.log(err);
  });
</script>
