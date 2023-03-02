<template>
  <Header
    :header-bg="HEADER_BG"
    :headline="HEADLINE"
    :print-headline="PRINT_HEADLINE"
    :features="FEATURES"
  />
</template>

<script setup>
import {ref} from 'vue';
import TimesAPI from '@/helpers/APIs/TimesAPI';
import Header from '@/page/Home/Partials/Header.vue';

const HEADER_BG = ref('');
const HEADLINE = ref('');
const PRINT_HEADLINE = ref('');

// Features
const FEATURES = ref([]);

TimesAPI.getArticles({
  q: 'news',
  fq: 'section_name:(world)'
}).then(res => {
  const NEWS = res.data.response.docs;

  // Main News
  const MAIN_NEWS = NEWS[0];
  HEADER_BG.value = `https://www.nytimes.com/${MAIN_NEWS.multimedia[43].url}`;
  HEADLINE.value = MAIN_NEWS.headline.main;
  PRINT_HEADLINE.value = MAIN_NEWS.abstract;

  // Features
  FEATURES.value = NEWS.filter((news, ind) => ind !== 0).map(news => {{
    console.log(news);
    return {
      imgSrc: `https://www.nytimes.com/${news.multimedia[43].url}`,
      title: news.headline.main,
      subSectionName: news.section_name,
      url: news.web_url
    }
  }})

  console.log(NEWS);
}).catch(err => {
  // Redirect to another page
  console.log(err)
})
</script>
