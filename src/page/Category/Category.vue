<template>
  <div class="flex min-h-screen flex-col items-start py-10 px-3 sm:px-8" v-if="!!MAIN_NEWS">
    <p
      class="mx-auto max-w-xl rounded-lg bg-red-100 py-3 px-4 text-center text-sm font-semibold text-red-600"
    >
      Please take note that the API only provides 10 items per request.
    </p>

    <router-link class="mt-4 inline-flex items-center hover:underline" :to="{ name: 'Home' }">
      <span class="mr-1 flex h-4 w-4">
        <ArrowLeft class="block w-full fill-indigo-600 group-hover:fill-indigo-500" />
      </span>
      <span class="text-base font-semibold text-indigo-600 group-hover:text-indigo-500"
        >Go Back</span
      >
    </router-link>

    <div class="mt-8 mb-20">
      <div class="flex flex-col xl:flex-row">
        <!-- MAIN NEWs -->
        <article class="shrink-0 xl:w-8/12">
          <span class="flex h-96 overflow-hidden rounded-lg">
            <img class="w-full object-cover" :src="MAIN_NEWS.img" alt="News Image" />
          </span>
          <h3 class="font-serif text-2xl font-bold">
            <a
              class="hover:text-indigo-600 hover:underline"
              :href="MAIN_NEWS.src"
              target="_blank"
              >{{ MAIN_NEWS.headline }}</a
            >
          </h3>
          <AuthorWithDate :published-date="MAIN_NEWS.publishedDate" :author="MAIN_NEWS.author" />
        </article>

        <!-- SUB NEWS -->
        <div class="mt-10 flex flex-col md:flex-row xl:mt-0 xl:w-4/12 xl:flex-col xl:pl-6">
          <article
            class="mb-4 flex flex-col last:mb-0 sm:flex-row md:flex-col md:pr-4 md:last:pr-0 xl:flex-row xl:pr-0"
            v-for="article in SUB_NEWS"
            :key="article"
          >
            <span
              class="flex h-32 shrink-0 overflow-hidden rounded-lg sm:mr-5 sm:w-44 md:w-full xl:w-44"
            >
              <img class="w-full object-cover" :src="article.img" alt="Image News" />
            </span>
            <div>
              <h3 class="font-serif text-base font-semibold">
                <a
                  class="hover:text-indigo-600 hover:underline"
                  :href="article.src"
                  target="_blank"
                  >{{ article.headline }}</a
                >
              </h3>
              <time
                class="font-serif text-sm italic text-slate-500"
                :datetime="article.publishedDate"
                >{{ article.publishedDate }}</time
              >
            </div>
          </article>
        </div>
      </div>

      <!-- NEWS LIST -->
      <div class="mt-10 flex flex-wrap">
        <article
          class="mb-8 w-full px-2 md:w-2/6 xl:mb-0 xl:w-1/6"
          v-for="article in LIST_NEWS"
          :key="article"
        >
          <span class="flex h-44 overflow-hidden rounded-lg">
            <img class="w-full object-cover" :src="article.img" alt="Image News" />
          </span>
          <h3 class="mt-2 font-serif text-base font-semibold">
            <a class="hover:text-indigo-600 hover:underline" :href="article.src" target="_blank">{{
              article.headline
            }}</a>
          </h3>
        </article>
      </div>
    </div>

    <Footer class="mt-auto pb-0" />
  </div>
</template>

<script setup>
import { useRoute, RouterLink } from 'vue-router';
import { ref } from 'vue';
import TimesAPI from '@/helpers/APIs/TimesAPI';
import ArrowLeft from '@/components/icons/ArrowLeft.vue';
import Footer from '@/components/globals/Footer.vue';
import NewsFormatter from '@/helpers/Formatters/NewsFormatter';
import AuthorWithDate from '@/components/globals/AuthorWithDate.vue';

const ROUTE = useRoute();
const CATEGORY = ref(ROUTE.params.id);
const MAIN_NEWS = ref(null);
const SUB_NEWS = ref(null);
const LIST_NEWS = ref(null);

const handleRequest = (res) => {
  const DOCS = res.data.response.docs;

  MAIN_NEWS.value = NewsFormatter.format(DOCS[0]);
  SUB_NEWS.value = DOCS.slice(1, 4).map((news) => NewsFormatter.format(news));
  LIST_NEWS.value = DOCS.slice(4, DOCS.length).map((news) => NewsFormatter.format(news));
};
TimesAPI.getArticles({
  q: CATEGORY.value
}).then(handleRequest);
</script>
