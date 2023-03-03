<template>
  <section class="w-6/12">
    <SectionTitle
      class="mb-6 text-center text-4xl font-black"
      :plain="'Top'"
      :colored="'Opinions'"
    />
    <div class="flex">
      <div class="flex w-6/12 flex-col px-8">
        <article class="mb-10 last:mb-0" v-for="opinion in LEFT_OPINIONS" :key="opinion">
          <div class="flex">
            <span class="mr-4 flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <img class="w-full object-cover" :src="opinion.imgSrc" alt="News Article Image" />
            </span>
            <h3 class="font-serif text-base font-semibold text-slate-900 line-clamp-2">
              <a class="hover:underline" :href="opinion.src" target="_blank">{{
                opinion.headline
              }}</a>
            </h3>
          </div>

          <p class="mt-3 font-serif font-medium text-slate-700">{{ opinion.abstract }}</p>

          <p class="mt-2 text-sm font-semibold italic text-slate-500">
            By <span class="text-indigo-600">{{ opinion.author }}</span> • {{ opinion.date }}
          </p>
        </article>
      </div>
      <div class="flex w-6/12 flex-col px-8">
        <article class="mb-10 last:mb-0" v-for="opinion in RIGHT_OPINIONS" :key="opinion">
          <div class="flex">
            <span class="mr-4 flex h-12 w-12 shrink-0 overflow-hidden rounded-full">
              <img class="w-full object-cover" :src="opinion.imgSrc" alt="News Article Image" />
            </span>
            <h3 class="font-serif text-base font-semibold text-slate-900 line-clamp-2">
              <a class="hover:underline" :href="opinion.src" target="_blank">{{
                opinion.headline
              }}</a>
            </h3>
          </div>

          <p class="mt-3 font-serif font-medium text-slate-700">{{ opinion.abstract }}</p>

          <p class="mt-2 text-sm font-semibold italic text-slate-500">
            By <span class="text-indigo-600">{{ opinion.author }}</span> • {{ opinion.date }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import SectionTitle from '@/components/globals/SectionTitle.vue';
import TimesAPI from '@/helpers/APIs/TimesAPI';
import NameFormatter from '@/helpers/Formatters/NameFormatter';

const LEFT_OPINIONS = ref([]);
const RIGHT_OPINIONS = ref([]);

TimesAPI.getArticles({
  fq: 'section_name:("Opinion")',
  sort: 'newest'
})
  .then((res) => {
    const DATA = res.data.response.docs.slice(0, 6);
    const OPINIONS = DATA.map((opinion) => {
      const AUTHOR_NAME = NameFormatter.formatName(
        opinion.byline.person.firstname,
        opinion.byline.person.middlename,
        opinion.byline.person.lastname
      );

      return {
        imgSrc: `https://www.nytimes.com/${opinion.multimedia[40].url}`,
        headline: opinion.headline.main,
        abstract: opinion.abstract,
        author: AUTHOR_NAME !== '' ? AUTHOR_NAME : 'Anonymous',
        src: opinion.web_url,
        date: new Date(opinion.pub_date).toLocaleDateString('en', { dateStyle: 'long' })
      };
    });

    LEFT_OPINIONS.value = OPINIONS.slice(0, 3);
    RIGHT_OPINIONS.value = OPINIONS.slice(3, 6);
  })
  .catch((err) => {
    console.log(err);
  });
</script>
