<template>
  <Teleport to="body">
    <PageLoader v-if="showLoader" />
  </Teleport>
  <header
    v-if="!!MAIN_NEWS"
    ref="header"
    class="relative flex min-h-screen flex-col bg-cover bg-center bg-no-repeat p-1"
    :style="{ 'background-image': `url('${MAIN_NEWS.img}')` }"
  >
    <BlurredNavbar class="z-40" ref="navbar" :nav-links="NAVS" />

    <div
      ref="titleWrapper"
      class="relative mx-auto mt-16 max-w-screen-2xl pl-10 pr-4 font-serif text-white"
    >
      <span class="absolute left-0 -top-3 flex h-8 w-8">
        <QuoteLeft class="block h-full w-full fill-white" />
      </span>
      <h2 class="mb-1 text-2xl font-bold lg:text-4xl xl:text-6xl">
        {{ MAIN_NEWS.headline }}
      </h2>
      <p class="text-base font-semibold">{{ MAIN_NEWS.printHeadline }}</p>
      <a
        :href="MAIN_NEWS.src"
        target="_blank"
        class="mt-2 mb-14 inline-flex rounded-md px-4 py-3 font-semibold backdrop-blur-2xl transition duration-100 hover:backdrop-blur-lg"
        type="button"
      >
        Read More
      </a>
    </div>

    <BlurredCardFeatureList
      ref="featureCards"
      :features="FEATURES"
      class="bottom-0 left-0 mt-auto w-full"
    />
  </header>
</template>

<script setup>
import { ref, nextTick } from 'vue';
import PageLoader from '@/components/globals/PageLoader.vue';
import QuoteLeft from '@/components/icons/QuoteLeft.vue';
import BlurredNavbar from '@/components/globals/BlurredNavbar.vue';
import BlurredCardFeatureList from '@/components/globals/BlurredCardFeatureList.vue';
import TimesAPI from '@/helpers/APIs/TimesAPI';
import NewsFormatter from '@/helpers/Formatters/NewsFormatter';

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
const showLoader = ref(true);
const header = ref(null);
const featureCards = ref(null);
const navbar = ref(null);
const MAIN_NEWS = ref(null);
const FEATURES = ref(null);
const adjustTitleWrapper = () => {
  if (!navbar.value) return;
  const NAVBAR_HEIGHT = navbar.value.$el.offsetHeight;
  header.value.style.paddingTop = `${NAVBAR_HEIGHT}px`;
};
const handleRequest = (res) => {
  const NEWS = res.data.response.docs;

  // Main News
  MAIN_NEWS.value = NewsFormatter.format(NEWS[0]);

  // Features
  FEATURES.value = NEWS.filter((news, ind) => ind !== 0).map((news) => NewsFormatter.format(news));

  nextTick(() => {
    const IMGS = featureCards.value.$el.querySelectorAll('img');
    const TOTAL_LENGTH = IMGS.length;
    let ctr = 0;

    IMGS.forEach((img) => {
      img.addEventListener('load', () => {
        if (img.complete) {
          ctr++;
        }

        if (ctr === TOTAL_LENGTH) {
          showLoader.value = false;
          document.body.style.overflow = null;
        }
      });
    });

    adjustTitleWrapper();
    window.addEventListener('resize', adjustTitleWrapper);
  });
};

document.body.style.overflow = 'hidden';
TimesAPI.getArticles({
  q: 'news',
  fq: 'section_name:("World")'
})
  .then(handleRequest)
  .catch((err) => {
    // Redirect to another page
    console.log(err);
  });
</script>
