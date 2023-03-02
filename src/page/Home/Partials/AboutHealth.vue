<template>
  <section v-if='Object.keys(MAIN_NEWS).length !== 0'>
    <SectionTitle :colored="'About'" :plain="'Health'"/>
    <BlurredTitleNews :header-bg='MAIN_NEWS.headerBg' :author='MAIN_NEWS.author' :headline='MAIN_NEWS.headline'
                      :published-date='MAIN_NEWS.publishedDate' :src='MAIN_NEWS.src' />
    <div class='flex justify-between mt-6'>
      <NewsCard class='w-6/12 mr-2' v-for='news in SUB_NEWS.value' :key='news' :header-bg='news.headerBg' :author='news.author'
                :headline='news.headline' :published-date='news.publishedDate' :src='news.src' />
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue';
import BlurredTitleNews from '@/components/globals/BlurredTitleNews.vue';
import NewsCard from '@/components/globals/NewsCard.vue';
import SectionTitle from '@/components/globals/SectionTitle.vue';
import TimesAPI from '@/helpers/APIs/TimesAPI';
import NameFormatter from '@/helpers/Formatters/NameFormatter';

const MAIN_NEWS = reactive({
  headerBg: '',
  headline: '',
  author: '',
  publishedDate: new Date(),
  src: ''
});
const SUB_NEWS = reactive([]);


TimesAPI.getArticles({
  q: 'Health',
  fq: 'section_name:("Health")',
  page_size: 3
}).then(res => {
  const NEWS = res.data.response.docs.slice(0, 3);
  SUB_NEWS.value = NEWS.filter((news, ind) => ind !== 0).map(news => {
    const MAIN_NEWS_AUTHOR_NAME = NameFormatter.formatName(news.byline.person.firstname, news.byline.person[0].middlename, news.byline.person[0].lastname);
    return {
      headerBg: `https://www.nytimes.com/${news.multimedia[43].url}`,
      headline: news.headline.main,
      author: MAIN_NEWS_AUTHOR_NAME,
      publishedDate: new Date(news.pub_date),
      src: news.web_url,
    };
  });

  const MAIN_NEWS_AUTHOR_NAME = NameFormatter.formatName(NEWS[0].byline.person[0].firstname, NEWS[0].byline.person[0].middlename, NEWS[0].byline.person[0].lastname);
  MAIN_NEWS.headerBg = `https://www.nytimes.com/${NEWS[0].multimedia[43].url}`;
  MAIN_NEWS.headline = NEWS[0].headline.main;
  MAIN_NEWS.author = MAIN_NEWS_AUTHOR_NAME;
  MAIN_NEWS.publishedDate = new Date(NEWS[0].pub_date);
  MAIN_NEWS.src = NEWS[0].web_url;
}).catch(err => {
  console.log(err);
});
</script>
