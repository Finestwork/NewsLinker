<template>
  <section class="pt-14">
    <SectionTitle class="text-left text-8xl font-black" :plain="'The'" :colored="'World'" />

    <div class="mt-8 flex flex-col xl:flex-row">
      <!-- Big Articles -->
      <div class="flex flex-col md:flex-row xl:w-8/12">
        <article class="mb-8 md:pr-4 xl:mb-0 xl:w-4/6">
          <span class="flex overflow-hidden rounded-xl">
            <img class="w-full" :src="BIG_NEWS.img" alt="News Picture" />
          </span>
          <h3 class="mt-4 mb-1 font-serif text-xl font-semibold text-slate-900 line-clamp-2">
            <a class="hover:underline" :href="BIG_NEWS.src" target="_blank">{{
              BIG_NEWS.headline
            }}</a>
          </h3>
          <AuthorWithDate :published-date="BIG_NEWS.publishedDate" :author="BIG_NEWS.author" />
        </article>
        <article class="xl:w-2/6">
          <span class="flex overflow-hidden rounded-xl">
            <img class="w-full" :src="SUB_NEWS.img" alt="News Picture" />
          </span>
          <h3 class="mt-4 mb-1 font-serif text-xl font-semibold text-slate-900 line-clamp-2">
            <a class="hover:underline" :href="SUB_NEWS.src" target="_blank">{{
              SUB_NEWS.headline
            }}</a>
          </h3>
          <p class="mb-1 font-serif text-sm font-medium text-slate-700">
            {{ SUB_NEWS.abstract }}
          </p>
          <AuthorWithDate :published-date="SUB_NEWS.publishedDate" :author="SUB_NEWS.author" />
        </article>
      </div>

      <!-- List Articles -->
      <div
        class="mt-10 flex flex-col items-end md:flex-row md:flex-wrap md:justify-between xl:mt-0 xl:w-4/12 xl:pl-6"
      >
        <article
          class="mb-16 flex w-full md:w-5/12 xl:w-full"
          v-for="news in LIST_NEWS"
          :key="news"
        >
          <div class="order-2 flex flex-col xl:order-1 xl:mr-6">
            <h3 class="font-serif font-semibold text-slate-900">
              <a class="hover:underline" :href="news.src">{{ news.headline }}</a>
            </h3>
            <AuthorWithDate :published-date="news.author" :author="news.publishedDate" />
          </div>
          <span
            class="xl:mrr-0 order-1 mr-6 hidden h-28 w-28 shrink-0 overflow-hidden rounded-xl sm:flex xl:order-2 xl:ml-auto"
          >
            <img class="w-full object-cover" :src="news.img" alt="News Image" />
          </span>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitle from '@/components/globals/SectionTitle.vue';
import AuthorWithDate from '@/components/globals/AuthorWithDate.vue';
import TimesAPI from '@/helpers/APIs/TimesAPI';
import NewsFormatter from '@/helpers/Formatters/NewsFormatter';

const BIG_NEWS = ref({});
const SUB_NEWS = ref({});
const LIST_NEWS = ref([]);

TimesAPI.getArticles({
  q: 'War',
  fq: 'section_name:("World")'
})
  .then((res) => {
    const DATA = res.data.response.docs;
    BIG_NEWS.value = DATA.slice(0, 1).map((news) => NewsFormatter.format(news))[0];
    SUB_NEWS.value = DATA.slice(1, 2).map((news) => NewsFormatter.format(news))[0];
    LIST_NEWS.value = DATA.slice(2, 5).map((news) => NewsFormatter.format(news));

    console.log(LIST_NEWS.value);
  })
  .catch((err) => console.log(err));
</script>
